import renderToDOM from '../utils/renderToDom';

const filterButton = () => {
  const domString = `<div>
  <label for="filter-value">Choose vocab category</label>
  <select class="form-control" id="filter-value" required>
    <option value="">Type</option>
    <option value="type1">type1</option>
    <option value="type2">type2</option>
    <option value="type3">type3</option>
  </select>
</div><button type="button" class="btn btn-primary" id="filter-btn">Submit</button>`;
  renderToDOM(domString, '#filter-buttons');
};

export default filterButton;
