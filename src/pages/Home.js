import Header from './../components/header/Header';

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, Reactjs, Redux, HTML5, BEM, CSS, SCSS, NPM, BootStrap, Yarn, Gulp, Webpack, Figma, Phtoshop,</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, PHP</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">CMS</h2>
              <p>Wordpress, 1C-Битрикс</p>
            </li>
          </ul>

        </div>
      </main>
    </>);
}

export default Home;