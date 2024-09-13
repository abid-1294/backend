const Bloglist = require("../models/blogSchema");

async function createBlogController(req, res) {
    const { name, author, description } = req.body;
    console.log(name, description);

    if (!req.file) {
        return res.status(400).json({ error: "Image is required" });
    }

    const duplicateBlog = await Bloglist.find({ name });
    if (duplicateBlog.length > 0) {
        return res.json({ error: "This Blog is already exists" })
    }

    const blog = new Bloglist({
        name,
        author,
        description,
        image: `http://localhost:3000/uploads/${req.file.filename}`, // Storing the image URL
    })

    await blog.save();

    // Delete the temporary uploaded file after saving to the database
    // fs.unlinkSync(`uploads/${req.file.filename}`);
    res.json({ success: "Blog created successfully...!" })
}
// Updated getAllBlog function
const getAllBlog = async (req, res) => {
    try {
        const blogs = await Bloglist.find({});
        const formattedBlogs = blogs.map(blog => ({
            ...blog.toObject(),
            created: blog.created.toISOString().split('T')[0]  // Format date as YYYY-MM-DD
        }));
        res.send(formattedBlogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Server Error');
    }
};



module.exports = {createBlogController, getAllBlog}