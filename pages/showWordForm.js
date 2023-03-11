import clearDOM from '../components/clearDom';
import renderToDOM from '../utils/renderToDom';

const showWordForm = (word = {}) => {
  clearDOM();
  const domString = `
  <form id="submit-word" class="mb-4">
    <div class="form-group">
      <label for="title">Word</label>
      <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Word Here" value="${word.word_name || ''}" required>
    </div>
    <div class="form-group">
      <label for="definition">Definition</label>
      <input type="text" class="form-control" id="definition" aria-describedby="bookTitle" placeholder="Enter Definition" value="${word.definition || ''}" required>
    </div>
    <div>
      <label for="word-type">Select a Type</label>
      <select class="form-control" id="word-type" required>
        <option value="">Select an option</option>
        <option value="type1">type1</option>
        <option value="type2">type2</option>
        <option value="type3">type3</option>
        <option value="type4">type4</option>
        <option value="type5">type5</option>
        <option value="type6">type6</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary" id="${word.firebaseKey ? `update-word--${word.firebaseKey}` : 'submit-button'}">Submit Word
    </button>
  </form>`;
  renderToDOM(domString, '#form-display');
};

export default showWordForm;
