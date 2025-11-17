import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

function stripHTML(htmlString) {
  const temp = document.createElement("div");
  temp.innerHTML = htmlString;
  return temp.textContent || temp.innerText || "";
}

export function Tablepost({ posts, openDialog }) {
  return (
    <div className="px-3 mx-auto max-w-7xl pt-4 pb-10">
      <h2 className="hero-title text-3xl sm:text-5xl font-semibold sm:leading-[4rem] text-[#5044E5] text-center mt-10 mb-8">
        ✍️ My Post
      </h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">TITLE</TableHead>
            <TableHead>CONTENT</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-10">
                You have no posts yet.
              </TableCell>
            </TableRow>
          ) : (
            posts.map((post) => (
              <TableRow key={post._id}>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{stripHTML(post.content)}</TableCell>
                <TableCell className="text-right flex justify-end gap-3">
                  <Link to={`/blog-details/${post._id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-binoculars w-5 h-5"
                      >
                        <path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                        <path d="M16.346 9.17l-.729 -1.261c-.16 -.248 -1.056 -.203 -1.117 .091l-.177 1.38"></path>
                        <path d="M19.761 14.813l-2.84 -5.133c-.189 -.31 -.592 -.68 -1.421 -.68c-.828 0 -1.5 .448 -1.5 1v6"></path>
                        <path d="M7.654 9.17l.729 -1.261c.16 -.249 1.056 -.203 1.117 .091l.177 1.38"></path>
                        <path d="M4.239 14.813l2.84 -5.133c.189 -.31 .592 -.68 1.421 -.68c.828 0 1.5 .448 1.5 1v6"></path>
                        <rect width="4" height="2" x="10" y="12"></rect>
                      </svg>
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
                    onClick={() => openDialog(post._id, post.title)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M4 7h16"></path>
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                      <path d="M10 12l4 4m0 -4l-4 4"></path>
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>

        <TableFooter>
          {posts.length > 0 && (
            <TableRow>
              <TableCell colSpan={2}>TOTAL POSTS</TableCell>
              <TableCell className="text-right">{posts.length}</TableCell>
            </TableRow>
          )}
        </TableFooter>
      </Table>
    </div>
  );
}
