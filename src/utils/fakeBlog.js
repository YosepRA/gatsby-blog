import faker from 'faker';

faker.seed(100);

function generateBlogs(amount) {
  const result = [];
  let idCounter = 100;

  for (let num = 0; num < amount; num += 1) {
    const newBlog = {
      id: idCounter++,
      title: faker.lorem.words(3),
      publishedDate: faker.date.recent(5, new Date()),
      body: faker.lorem.paragraphs(10),
    };

    result.push(newBlog);
  }

  return result;
}

export default generateBlogs;
