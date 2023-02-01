import {someFn} from "./test";
import {render} from "react-dom";
import {Counter} from "./components/counter";

render(
    <div>
        <Counter/>
    </div>,
    document.getElementById('root')
)