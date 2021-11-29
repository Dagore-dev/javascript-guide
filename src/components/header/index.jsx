import { NavLink } from "solid-app-router";

export default function Header () {
    return (
        <header>
        <h1>Guía de Javascript para DAW1</h1>
        <nav>
          <ul>
            <li>
              <NavLink href="/">Principal</NavLink>
            </li>
            <li>
              <NavLink href="/lo-mas-basico">Lo más básico</NavLink>
            </li>
            <li>
              <NavLink href="/uso-de-objetos-integrados">Uso de objetos integrados</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}