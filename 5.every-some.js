function checkUsersValid(goodUsers) {
	      return function allUsersValid(submittedUsers) {
		      //all users form submittedUsers are in goodUsers?
		      return submittedUsers.every(function(submit) {
			      // I did not understood this part of the problem
			      return goodUsers.some(function(good) {
				      return good.id === submit.id
			      })
		      })
	      }
}

module.exports = checkUsersValid
