import React from 'react'

const PostComment = ({postComment}) => {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get('inputComment');
    postComment(comment)
  }

  return (
    <div class="col-md-8">
      <form onSubmit={handleSubmit} >
        <div class="d-flex flex-start w-100">
            <img class="rounded-circle shadow-1-strong me-3" src="https://i.pravatar.cc/50" alt="avatar" width="40" height="40" />
            <div data-mdb-input-init class="form-outline w-100">
                <textarea class="form-control" name="inputComment" rows="4" placeholder="Write your comment" ></textarea>
            </div>
        </div>
        <div class="float-end mt-2 pt-1">
            <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm m-2">Post comment</button>
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-primary btn-sm">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default PostComment