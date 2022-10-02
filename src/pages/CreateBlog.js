import {Button, TextField, Alert, Snackbar} from "@mui/material";
import {useState} from "react";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router-dom";
const CreateBlog = () => {
    const [authorName, setAuthorName] = useState("");
    const [blogBody, setBlogBody] = useState("");
    const [blogTitle, setBlogTitle] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [errorCreating, setErrorCreating] = useState(false);
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        const jsonedBlog = JSON.stringify({
            authorName,
            body: blogBody,
            title: blogTitle,
            id: nanoid(),
        });
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonedBlog,
        })
            .then((res) => {
                setShowAlert(true);
                if (res.ok) {
                    setErrorCreating(false);
                    navigate("/blogs");
                } else {
                    setErrorCreating(true);
                }
            })
            .catch((error) => {
                setShowAlert(true);
                setErrorCreating(true);
            });
    };

    return (
        <>
            {!errorCreating ? (
                <Snackbar
                    open={showAlert}
                    autoHideDuration={6000}
                    anchorOrigin={{vertical: "top", horizontal: "center"}}
                    onClose={() => {
                        setShowAlert(false);
                    }}
                >
                    <Alert
                        onClose={() => {
                            setShowAlert(false);
                        }}
                        severity="success"
                    >
                        Blog successfully created!
                    </Alert>
                </Snackbar>
            ) : (
                <Snackbar
                    open={showAlert}
                    autoHideDuration={6000}
                    anchorOrigin={{vertical: "top", horizontal: "center"}}
                    onClose={() => {
                        setShowAlert(false);
                    }}
                >
                    <Alert
                        onClose={() => {
                            setShowAlert(false);
                        }}
                        severity="error"
                    >
                        There was an error creating a new blog!
                    </Alert>
                </Snackbar>
            )}

            <form
                className="createBlog"
                onSubmit={handleFormSubmit}
            >
                <h2 style={{textAlign: "center"}}>Create New Blog</h2>
                <TextField
                    id="authorName"
                    label="Your Name"
                    variant="outlined"
                    required
                    type="text"
                    fullWidth
                    margin="normal"
                    onChange={(ev) => {
                        setAuthorName(ev.target.value);
                    }}
                    value={authorName}
                ></TextField>
                <TextField
                    id="blogTitle"
                    label="Blog Title"
                    variant="outlined"
                    required
                    type="text"
                    fullWidth
                    margin="normal"
                    onChange={(ev) => {
                        setBlogTitle(ev.target.value);
                    }}
                    value={blogTitle}
                ></TextField>
                <TextField
                    id="blogBody"
                    label="Blog Body"
                    variant="outlined"
                    required
                    type="text"
                    fullWidth
                    margin="normal"
                    multiline
                    onChange={(ev) => {
                        setBlogBody(ev.target.value);
                    }}
                    value={blogBody}
                ></TextField>
                <div
                    className="flex-row"
                    style={{justifyContent: "flex-end", marginTop: "1em"}}
                >
                    <Button
                        variant="contained"
                        style={{padding: "0.6em 2em"}}
                        type="submit"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </>
    );
};

export default CreateBlog;
