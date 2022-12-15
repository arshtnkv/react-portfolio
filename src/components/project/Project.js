import { NavLink } from 'react-router-dom';
import './style.css';

const Project = (props) => {
  return (
    <li className="project">
      <NavLink to={`/project/${props.index}`}>
        <img src={props.img} alt="Project img" className="project__img" />
        <h3 className="project__title">{props.title}</h3>
      </NavLink>
    </li>
  );
}

export default Project;