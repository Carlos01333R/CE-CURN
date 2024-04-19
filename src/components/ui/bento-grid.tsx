import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto  mt-5 mb-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  ruta,
  icon,
  imagen,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  ruta?: string;
  icon?: React.ReactNode;
  imagen?:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
    >   
        <img src={imagen} alt="" className="w-[100%] h-[68%]"/>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
       
        <Link to={ruta || '/'} className="font-sans font-bold text-[#00897b]  mb-2 mt-2 underline">
        {title}
        </Link>


        <div className="font-sans font-normal text-black text-xs mb-2 ">
          {description}
        </div>

      
      </div>
    </div>
  );
};
