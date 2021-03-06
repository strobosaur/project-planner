const initState = {
  projects: [
    {id: '1', title: 'project 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: '2', title: 'project 2', content: 'Praesent vitae volutpat dui, ac accumsan dolor.'},
    {id: '3', title: 'project 3', content: 'Maecenas bibendum lobortis semper. Maecenas dictum a ipsum in tempor.'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;