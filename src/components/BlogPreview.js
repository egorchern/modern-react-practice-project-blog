import {faker} from "@faker-js/faker";
import Card from "@mui/material/Card";
import Counter from "./Counter";
import {saveAs} from "file-saver";
import {Link} from "react-router-dom";
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// const fakeBlogs = (blog_num) => {
//     let blogs = []
//     for (let i = 0; i < blog_num; i++) {
//         let blog = {
//             authorName: faker.name.firstName() + " " + faker.name.lastName(),
//             title: "My " + faker.word.noun(getRandomInt(3, 40)) + " is " + faker.word.adjective(getRandomInt(3, 40)),
//             body: faker.lorem.paragraph(),
//             id: nanoid()
//         }
//         blogs.push(blog);
//     }
//     return blogs
// }

// const exportAsJson = (obj) => {
//     let jsoned = JSON.stringify(obj, null, 2);
//     let blob = new Blob([`${jsoned}`], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "data.json");

// }

const Blog = ({title, body, author, id}) => {
    return (
        <Card className="blog">
            <Link to={`/blogs/${id}`}></Link>

            <div style={{display: "flex"}}>
                <h3 style={{flexGrow: 1}}>{`${author}: ${title}`}</h3>
            </div>

            <p>{body}</p>
        </Card>
    );
};

export default Blog;
