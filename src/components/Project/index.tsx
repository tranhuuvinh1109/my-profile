import Image from "next/image";
import { ProjectType } from "../../const";

type ProjectProps = {
  data: ProjectType[];
};
const Project = ({ data }: ProjectProps) => {
  return (
    <div className=" grid grid-cols-1 gap-4 px-16">
      {data.map((project, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border rounded-lg border-gray-600 p-4"
          >
            <div className=" relative w-[250px] h-[100px]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className=" object-contain"
              />
            </div>
            <h1 className=" text-3xl font-semibold">{project.name}</h1>
            <p className=" max-w-[600px] font-medium">{project.description}</p>
            {project.video && project.video}
            <div className="grid grid-cols-2 gap-4">
              {project.preview?.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className="">
                    {item?.video ? (
                      item.video
                    ) : (
                      <div className=" relative w-[650px] h-[350px]">
                        <Image
                          src={item.image ?? ""}
                          fill
                          alt={item.image ?? ""}
                          objectFit="contain"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
