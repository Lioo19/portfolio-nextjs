import className from 'classnames';
import { useRouter } from "next/router";

//Props should include title, description, image, imageAlt, reverse(bool)
export default function VerticalRow (props) {
  const verticalSwitchClass = className(
      "mt-16",
      "flex",
      "flex-wrap",
      "items-center",
      {
        "flex-row-reverse": props.reverse,
      }
  );

  const router = useRouter();

  return (
    <a href={props.href} className={verticalSwitchClass}>
    <div className="w-full sm:w-1/2 p-6 flex justify-center">
      <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
    </div>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
    </a>
  );
};
