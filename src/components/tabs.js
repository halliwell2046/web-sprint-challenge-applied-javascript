import axios from 'axios'


const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const div = document.createElement('div')
  div.classList.add('topics')
  
  const tabOne = document.createElement('div')
  tabOne.classList.add('tab')
  tabOne.textContent = topics[0]
  div.appendChild(tabOne);

  const tabTwo = document.createElement('div')
  tabTwo.classList.add('tab')
  tabTwo.textContent = topics[1]
  div.appendChild(tabTwo);

  const tabThree = document.createElement('div')
  tabThree.classList.add('tab')
  tabThree.textContent = topics[2]
  div.appendChild(tabThree);
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabContainer = document.querySelector(selector)

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((e) => {
    const arr = e.data.topics;
    tabContainer.append(Tabs(arr))
  });
};

export { Tabs, tabsAppender }
