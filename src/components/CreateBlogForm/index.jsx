import React from "react";
import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import UploadImage from "@/components/UploadImage";
import { Spinner } from "@/components/ui/spinner";

const CreateBlog = ({
  tagInput,
  setTagInput,
  tags,
  handleAddTag,
  handleRemoveTag,
  handleUploadFile,
  handleCreateBlog,
  title,
  setTitle,
  content,
  setContent,
  loading,
}) => {
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <h2 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-[#5044E5] text-center mt-10 mb-8">
          📝 Create a New Blog
        </h2>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <legend className="font-medium">Blog Image</legend>
            {/* <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
              <label
                htmlFor="blog-image"
                className="rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
              >
                <div className="text-sm text-gray-600 flex items-center justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
                  >
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M7 9l5 -5l5 5"></path>
                    <path d="M12 4l0 12"></path>
                  </svg>
                  
                  Click to upload image
                </div>

                <Input
                  onChange={(e) => handleUploadFile(e.target.files[0])}
                  id="blog-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div> */}
            <UploadImage onUpload={handleUploadFile} />
          </div>

          <div className="grid gap-2">
            <label htmlFor="title" className="font-medium text-sm">
              Blog Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter blog title"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="content" className="font-medium text-sm">
              Blog Content
            </label>

            <Editor
              value={content}
              onEditorChange={(newValue) => setContent(newValue)}
              id="content"
              apiKey="xeydi4k1zx6pi3unyfncthoh9pwsjaa68ca229fcu1gso009"
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  "anchor",
                  "autolink",
                  "charmap",
                  "codesample",
                  "emoticons",
                  "link",
                  "lists",
                  "media",
                  "searchreplace",
                  "table",
                  "visualblocks",
                  "wordcount",
                  "checklist",
                  "mediaembed",
                  "casechange",
                  "formatpainter",
                  "pageembed",
                  "a11ychecker",
                  "tinymcespellchecker",
                  "permanentpen",
                  "powerpaste",
                  "advtable",
                  "advcode",
                  "advtemplate",
                  "ai",
                  "uploadcare",
                  "mentions",
                  "tinycomments",
                  "tableofcontents",
                  "footnotes",
                  "mergetags",
                  "autocorrect",
                  "typography",
                  "inlinecss",
                  "markdown",
                  "importword",
                  "exportword",
                  "exportpdf",
                ],
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
                uploadcare_public_key: "73afe0c25fc5b53718b1",
              }}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="tag" className="font-medium text-sm">
              Blog Tag
            </label>

            <div className="flex gap-2">
              <Input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddTag();
                  }
                }}
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                id="tag"
                placeholder="Enter blog tag"
              />
              <button
                onClick={() => handleAddTag()}
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#5044E5] hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-white"
              >
                Add Tag
              </button>
            </div>

            <div className="flex gap-2 flex-wrap mt-2">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-[#5044E5] text-white px-4 py-1 rounded-full"
                >
                  {t}
                  <button
                    onClick={() => handleRemoveTag(i)}
                    type="button"
                    className="text-white hover:text-gray-200 text-sm cursor-pointer"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleCreateBlog()}
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-[#5044E5] hover:bg-[#5044E5]/90 h-9 px-4 py-2 w-fit mx-auto text-white cursor-pointer"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner /> Creating blog
              </div>
            ) : (
              "Create Blog"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
