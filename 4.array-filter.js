function getShortMessages(messages) {
	map1 = messages.map(message => message['message'])
	return map1.filter(message => message.length < 50)
}

module.exports = getShortMessages
