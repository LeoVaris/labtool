/**
 * The reducer for displaying pretty much all that you want to see
 * on the course page.
 *  See detailed documentation of the content below.
 *
 */

const courseInstancereducer = (store = [], action) => {
  switch (action.type) {
    case 'CP_INFO_SUCCESS':
      return action.response
    case 'ASSOCIATE_TEACHER_AND_STUDENT_SUCCESS': {
      console.log(store)
      const id = action.response.id
      const studentToChange = store.data.find(s => s.id === id)
      const changedStudent = { ...studentToChange, teacherInstanceId: action.response.teacherInstanceId }
      const mappedData = store.data.map(st => (st.id !== id ? st : changedStudent))
      return { ...store, data: mappedData }
    }
    case 'CODE_REVIEW_BULKINSERT_SUCCESS':
      var assignedReviews = {}
      var reviewNumber = action.response.data.reviewNumber
      action.response.data.codeReviews.forEach(cr => {
        assignedReviews[cr.reviewer] = cr.toReview
      })
      var newData = store.data.map(student => {
        const sId = assignedReviews[student.id]
        if (!sId) {
          return student
        }
        const index = student.codeReviews.map(cr => cr.reviewNumber).indexOf(reviewNumber)
        if (index === -1) {
          student.codeReviews.push({
            points: null,
            reviewNumber: reviewNumber,
            studentInstanceId: student.id,
            toReview: sId
          })
        } else {
          student.codeReviews[index].toReview = sId
        }
        return student
      })
      return { ...store, data: newData }
    default:
      return store
  }
}

export default courseInstancereducer

/**
 
{
  "role": String, tells if the user is a student or a teacher on this course.
  "data": {
      "id": Student or teacher instance id in database
      "github": String, the github address of the user
      "projectName": String, Projects name
      "courseInstanceId": Integer, on which course(id) does this instance belong
      "userId": Integer, on which user (id) does this instance belong
      "weeks": [
          {
              "id": Integer, database week id
              "points": Integer, points in course
              "weekNumber": integer, weeks number
              "feedback": String, the feedback on it.
              "studentInstanceId": integer, on which studentinstance does it belong.
              "comments": [
                  {
                      "id": Integer, comments database id
                      "hidden": boolean that tells whether the comment is a note or feedback
                      "comment": string, the comments message
                      "weekId": integer, on which week does the commentbelong
                      "from": String, the user who commented this.
                  }
              ]
          }
      ]
  }
}
*/
