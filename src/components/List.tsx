import React from "react";
import Image from "next/image";
import { PropsWithChildren } from "react";

function List({ children }: PropsWithChildren) {
  return (
    <ul>
      {React.Children.map(children, (item, index) => {
        const bulletNumber = index % 3;
        let bulletShape;
        switch (bulletNumber) {
          case 0:
            bulletShape = "star";
            break;
          case 1:
            bulletShape = "hexagon";
            break;
          case 2:
            bulletShape = "triangle";
            break;
          default:
            bulletShape = "star";
            break;
        }
        return (
          <li key={index} className="flex items-start gap-4 p-4">
            <Image
              src={`${bulletShape}.svg`}
              alt="/"
              width={24}
              height={24}></Image>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
