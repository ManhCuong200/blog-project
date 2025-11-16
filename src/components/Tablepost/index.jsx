import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; 

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
                <TableCell>{post.content}</TableCell>
                <TableCell className="text-right flex justify-end gap-3">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => openDialog(post._id, post.title)}
                  >
                    Delete
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
