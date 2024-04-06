import { Slider, CheckboxTitle, Checkbox, Buttons } from "./CardBody";
import { Card, Header } from "../App";

export function App() {
  return (
    <div className="bg-zinc-950 w-screen h-screen text-zinc-50 items-center justify-center flex space-x-4">
      <Card.Root>
        <Header
          title="Pele Perfeita"
          description="Aplique um tratamento de pele simples mas muito eficaz em suas fotos preserve a textura e remova manchas de maneira automática"
        />
        <section className="gap-4 flex flex-col">
          <Slider title="Suavização" defaultValue="0%" />
          <Slider title="Textura" defaultValue="0%" />

          <div className=" mt-4 w-full h-full gap-2 flex flex-col">
            <CheckboxTitle title="Método de Limpeza" />
            <div className="flex h-{25px} w-{118px}">
              <Checkbox title="Automático" />
              <Checkbox title="Manual" />
            </div>
          </div>
        </section>

        <Buttons />
      </Card.Root>

      <div>
        <Card.Root>
          <Header
            title="Dentes Brancos"
            description="Aplique um tratamento de pele simples mas muito eficaz em suas fotos preserve a textura e remova manchas de maneira automática"
          />
          <section className="gap-4 flex flex-col">
            <Slider title="Intensidade" defaultValue="0%" />
            <Slider title="Cor" defaultValue="0%" />
          </section>

          <Buttons />
        </Card.Root>
      </div>
      <div>
        <Card.Root>
          <Header
            title="Desfoque do fundo"
            description="Aplique um tratamento de pele simples mas muito eficaz em suas fotos preserve a textura e remova manchas de maneira automática"
          />
          <section className="gap-4 flex flex-col">
            <Slider title="Intensidade" defaultValue="0%" />
            <Slider title="Altura do desfoque" defaultValue="0%" />
            <Slider title="Ponto de foco" defaultValue="0%" />
          </section>

          <Buttons />
        </Card.Root>
      </div>
      <div>
        <Card.Root>
          <Header
            title="Olhos Mágicos"
            description="Aplique um tratamento de pele simples mas muito eficaz em suas fotos preserve a textura e remova manchas de maneira automática "
          />
          <section className="gap-4 flex flex-col">
            <Slider title="Intensidade de Luz" defaultValue="0%" />
            <Slider title="Lente de Contato" defaultValue="0%" />
            <Slider title="Dodge and Burn" defaultValue="0%" />
            <Slider title="Maquiagem" defaultValue="0%" />
            <Slider title="Anti Burn" defaultValue="0%" />
          </section>

          <Buttons />
        </Card.Root>
      </div>
      <div>
        <Card.Root>
          <Header
            title="Mesclagem"
            description="Aplique um tratamento de pele simples mas muito eficaz em suas fotos preserve a textura e remova manchas de maneira automática"
          />
          <section className="gap-4 flex flex-col">
            <Slider title="Cor do Fundo para a Pele" defaultValue="0%" />
            <Slider title="Cor da Pele para o Fundo" defaultValue="0%" />

            <div className=" mt-4 w-full h-full gap-2 flex flex-col">
              <CheckboxTitle title="Método de cor" />
              <div className="flex">
                <Checkbox title="Automático" />
                <Checkbox title="Mapa de Profund" />
              </div>
            </div>
          </section>

          <Buttons />
        </Card.Root>
      </div>
    </div>
  );
}
