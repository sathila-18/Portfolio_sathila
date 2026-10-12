// Looped auto-scrolling row, shared by the Home client logos and Pearl's "The Third Surface"
// (DESIGN.md › Client-logo tile). Scrolls left at a steady speed; swipe or drag to move it,
// with a little momentum on release. Eases to a quarter speed while a mouse hovers it. Keeps
// running with reduced motion on (the user's call).
//
// Markup: `marquee` > `.track` > three identical `.group`s. The track's CSS margin-left sets
// where the second group starts; the row moves from there.
const SPEED = 0.04; // px per ms (≈ 40px/s)
const HOVER_SPEED = SPEED / 4; // ≈ 10px/s while a mouse is over it
const EASE = 0.06; // how quickly speed eases toward its target, per 16ms frame
const FRICTION = 0.95; // momentum kept per 16ms frame

export function startMarquee(marquee: HTMLElement) {
  const track = marquee.querySelector<HTMLElement>('.track');
  const group = track?.querySelector<HTMLElement>('.group');
  if (!track || !group) return;

  let groupWidth = group.offsetWidth;
  let margin = parseFloat(getComputedStyle(track).marginLeft);
  // Left edge of the row. Kept in [-groupWidth, 0) so both sides stay covered.
  let left = margin;
  let momentum = 0;
  let hovering = false;
  let speed = SPEED;
  let dragging = false;
  let lastX = 0;
  let lastMoveTime = 0;
  let dragVelocity = 0;
  let lastFrame = performance.now();

  const wrap = (value: number) => ((value % groupWidth) - groupWidth) % groupWidth;

  function frame() {
    // Real elapsed time, clamped so a long pause (hidden tab) doesn't jump the row.
    const now = performance.now();
    const dt = Math.min(Math.max(now - lastFrame, 0), 50);
    lastFrame = now;

    if (!dragging) {
      // Ease between full and hover speed instead of switching abruptly.
      const target = hovering ? HOVER_SPEED : SPEED;
      speed += (target - speed) * (1 - Math.pow(1 - EASE, dt / 16));
      left -= speed * dt;
      left += momentum * dt;
      momentum *= Math.pow(FRICTION, dt / 16);
      if (Math.abs(momentum) < 0.001) momentum = 0;
    }

    left = wrap(left);
    track!.style.transform = `translate3d(${left - margin}px, 0, 0)`;
    requestAnimationFrame(frame);
  }

  marquee.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'mouse') hovering = true;
  });
  marquee.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'mouse') hovering = false;
  });

  marquee.addEventListener('pointerdown', (e) => {
    dragging = true;
    momentum = 0;
    dragVelocity = 0;
    lastX = e.clientX;
    lastMoveTime = e.timeStamp;
    marquee.setPointerCapture(e.pointerId);
    marquee.toggleAttribute('data-dragging', true);
  });

  marquee.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dt = Math.max(e.timeStamp - lastMoveTime, 1);
    left += dx;
    dragVelocity = dx / dt;
    lastX = e.clientX;
    lastMoveTime = e.timeStamp;
  });

  const endDrag = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    // Only carry momentum if the pointer was still moving when released.
    momentum = e.timeStamp - lastMoveTime < 80 ? dragVelocity : 0;
    marquee.toggleAttribute('data-dragging', false);
  };
  marquee.addEventListener('pointerup', endDrag);
  marquee.addEventListener('pointercancel', endDrag);

  new ResizeObserver(() => {
    groupWidth = group.offsetWidth;
    margin = parseFloat(getComputedStyle(track).marginLeft);
  }).observe(marquee);

  requestAnimationFrame(frame);
}
