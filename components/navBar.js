import renderToDOM from '../utils/renderToDom';

const buildNavBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">Riley's Vocab-you-lary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="view-words">View All Cards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-word">Create New Word</a>
            </li>
            <li class="nav-item">
            <span class="nav-link" id="logout-button"></span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
  renderToDOM(domString, '#navbar');
};

export default buildNavBar;
