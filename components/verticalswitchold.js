export default function VerticalSwitch () {
  return (
      <section className="flex justify-around items-center pb-10 h-72 text-center">
        <div className="h-full w-1/5 rounded bg-baseyellow pt-16">
          <a href="/about">
            <p>About</p>
          </a>
        </div>
        <div className="h-full w-1/5 rounded bg-baseyellow pt-16">
          <a href="/portfolio">
            <p>Portfolio</p>
          </a>
        </div>
        <div className="h-full w-1/5 rounded bg-baseyellow pt-16">
          <a href="/contact">
            <p>Contact</p>
          </a>
        </div>
      </section>
  );
};
