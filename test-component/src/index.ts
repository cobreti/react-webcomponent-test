import r2wc from "@r2wc/react-to-web-component";
import Card from "./card/card.tsx";

// export * from './card/card.module.scss';
// export * from './card/card.tsx';

customElements.define(
    "test-card", r2wc(Card, {
        props: { name: "string"}
    })
)
