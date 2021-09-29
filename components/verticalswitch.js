import VerticalRow from './verticalrow';

export default function VerticalSwitch () {
  return (
    <section className="px-1">
      <VerticalRow
        title="Experience?"
        description="We all experience things, things that led us to where we are today. If you're curious about my journey within IT, you've come to the right place."
        image="/images/christin-hume-unsplash.jpg"
        imageAlt="Person in yellow shirt writing at a laptop"
        href="/portfolio"
        reverse
      />
      <VerticalRow
        title="Everything's possible"
        description="...With the help of a cup of coffee. I believe in meetings held heart to heart, accompanied by a steaming cup. That's where we find our challenges and our agreements. Tell me, where you want to hold ours?"
        image="/images/albert-s-unsplash.jpg"
        imageAlt="A green cup filled with coffee with a heart-shaped pattern in the foam"
        href="/contact"
      />
      <VerticalRow
        title="Curious about who I am?"
        description="There's an entire page for that, just a simple click away."
        image="/images/felipe-correia-unsplash.jpg"
        imageAlt="Beige abstract image of two lines colliding at 90 degrees"
        href="/about"
        reverse
      />
    </section>
  );
};
