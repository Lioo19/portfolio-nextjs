import VerticalRow from './verticalrow';

export default function VerticalSwitch () {
  return (
    <section className="px-1">
      <VerticalRow
          title="Title1"
          description="description1 description1 description1 description1 description1 description1"
          image="/images/tradgard2flipped.png"
          imageAlt="FirstImageAlt1"
      />
      <VerticalRow
          title="Title1"
          description="description1"
          image="/images/tradgard2flipped.png"
          imageAlt="FirstImageAlt1"
          reverse
      />
    </section>
  );
};
