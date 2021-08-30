import faker from 'faker';

import { capitalizeFirstLetter } from './helpers';

function generateBlogs(amount) {
  const result = [];
  let idCounter = 100;

  faker.seed(100);

  for (let num = 0; num < amount; num += 1) {
    const newBlog = {
      id: idCounter++,
      title: capitalizeFirstLetter(faker.lorem.words(3)),
      publishedDate: faker.date.recent(5, new Date('2021-08-30T08:48:49.423Z')),
      body: faker.lorem.paragraphs(10),
    };

    result.push(newBlog);
  }

  return result;
}

export default generateBlogs;
