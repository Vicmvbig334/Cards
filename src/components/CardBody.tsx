import React from "react";

export function Slider({
  title,
  defaultValue,
}: {
  title: string;
  defaultValue: string;
}) {
  return (
    <label htmlFor="nameOfInput" className="flex flex-col">
      <span className="text-zinc-400">{title}</span>
      <div className="flex w-full gap-5 justify-between">
        <input
          className="appearance-none bg-transparent w-full"
          type="range"
          id="nameOfInput"
        />
        <input
          className="text-zinc-400 bg-zinc-900 rounded-sm border border-zinc-700 w-12 flex text-center"
          type="text"
          defaultValue={defaultValue}
        />
      </div>
    </label>
  );
}
export function CheckboxTitle({ title }: { title: string }) {
  return <span className="text-zinc-400 mt-4">{title}</span>;
}
export function Checkbox({ title }: { title: string }) {
  return (
    <div className="w-full items-center justify-start gap-10 flex">
      <label className="space-x-1" htmlFor="#automatic">
        <input type="radio" id="automatic" />
        <span>{title}</span>
      </label>
    </div>
  );
}
export function Buttons() {
  return (
    <section className="flex gap-2">
      <button className="w-full h-10 px-10 bg-zinc-800 rounded">
        Cancelar
      </button>
      <button className="w-full h-10 px-10 bg-red-700 rounded">Aplicar</button>
    </section>
  );
}
