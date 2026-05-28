// Components
import Title from "../title";

const License = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <Title className="text-[#009263] text-4xl">License</Title>
      <p className="text-justify">
        All datasets, baseline models, and winning submissions will be released
        under{" "}
        <span className="font-black">
          Creative Commons Attribution 4.0 (CC BY 4.0)
        </span>{" "}
        and <span className="font-black">Apache 2.0</span> licenses where
        applicable. These resources remain freely available as{" "}
        <span className="font-black">Digital Public Goods</span>, enabling
        reuse in research, education, and innovation.
      </p>
    </div>
  );
};

export default License;
