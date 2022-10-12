import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import {Button, Badge} from 'reactstrap'
import Color from "../Color";
import ThemeContext from "../context/ThemeContext.jsx";
import {useContext, useState} from 'react'

const ThemeBoard = (props) => {
    const {color, setColor} = useContext(ThemeContext)
    // const [theme, setTheme] = useState('white');
    return (
      <>
        <header
          className="text-center display-6 border border-top-0 p-1"
          style={color === "white" ? Color.white : Color.dark}
        >
          React Theme Switcher
        </header>
        <main className="pt-4 d-flex flex-column align-items-center">
          <h5>
            Current Theme
            <Badge
              style={color === "white" ? Color.white : Color.dark}
              color={color === "white" ? Color.white.color : Color.dark.color}
              pill
              className="m-1"
            >
              {color}
            </Badge>
          </h5>
          <p
            className="p-5 m-3"
            style={color === "white" ? Color.white : Color.dark}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptate amet excepturi natus odit ipsa. Veritatis, saepe. Aperiam
            voluptas, facere nam ipsam pariatur velit autem tenetur aliquid
            voluptate sapiente deserunt. Pariatur neque magnam architecto,
            maiores minus praesentium suscipit unde nemo amet iure illum nobis
            in ipsa? Ab natus in illum tenetur ullam ut fugiat! Porro adipisci
            repudiandae exercitationem consequatur reprehenderit? Eveniet a
            alias fugiat ex, quam voluptatum beatae dolorem, obcaecati non
            laudantium mollitia fugit quod debitis eos enim unde itaque illo
            recusandae impedit ipsam ipsa. Officia esse iste maiores quod.
          </p>
          <p
            className="p-5 m-3"
            style={color === "white" ? Color.white : Color.dark}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            voluptate amet excepturi natus odit ipsa. Veritatis, saepe. Aperiam
            voluptas, facere nam ipsam pariatur velit autem tenetur aliquid
            voluptate sapiente deserunt. Pariatur neque magnam architecto,
            maiores minus praesentium suscipit unde nemo amet iure illum nobis
            in ipsa? Ab natus in illum tenetur ullam ut fugiat! Porro adipisci
            repudiandae exercitationem consequatur reprehenderit? Eveniet a
            alias fugiat ex, quam voluptatum beatae dolorem, obcaecati non
            laudantium mollitia fugit quod debitis eos enim unde itaque illo
            recusandae impedit ipsam ipsa. Officia esse iste maiores quod.
          </p>
          <Button
            color={color === "white" ? "light" : "dark"}
            style={{ fontSize: "1.3rem" }}
            className="p-2 mt-3"
            onClick={() => setColor(color === "white" ? "dark" : "white")}
          >
            {color === "white" ? (
              <FaLightbulb className="mx-4" my="3" />
            ) : (
              <FaRegLightbulb className="mx-4" my="3" />
            )}
          </Button>
        </main>
      </>
    );
}

export default ThemeBoard