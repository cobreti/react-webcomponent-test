import './App.css'
// import Card from "./card/card.tsx";
// import Card from 'http://localhost:8080/component/card/dist/index.es.js'


declare global {
    namespace JSX {
        interface TestCardProps extends React.HTMLAttributes<HTMLElement> {
            name: string,
            card?: string
        }
        interface IntrinsicElements {
            'test-card': React.DetailedHTMLProps<
                TestCardProps,
                HTMLElement>
        }
    }
}

function App() {

  return (
    <>
        <h1>Test Page</h1>
        <test-card name="web-component" ></test-card>
        {/*<Card name="test"></Card>*/}
    </>
  )
}

export default App
