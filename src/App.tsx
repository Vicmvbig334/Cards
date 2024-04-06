import "./App.css";
import React from "react";
import {
  Slider,
  CheckboxTitle,
  Checkbox,
  Buttons,
} from "./components/CardBody";
import { App } from "./components/Cards";

type CardRootProps = {
  children: React.ReactNode;
};

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="bg-zinc-900 w-96 h-fit overflow-hidden p-4 px-5 gap-12 flex flex-col justify-between">
      {children}
    </div>
  );
};

export const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="w-full flex flex-col gap-4 mt-4">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-small">{description}</p>
    </section>
  );
};

export const Card = {
  Root: CardRoot,
  Header: Header,
  Slider: Slider,
  Checkbox: Checkbox,
  CheckboxTitle: CheckboxTitle,
  Buttons: Buttons,
};

export default App;
