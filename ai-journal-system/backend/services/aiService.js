exports.analyzeEmotion = async (text) => {

  text = text.toLowerCase()

  let emotion = "neutral"

  if(text.includes("calm") || text.includes("peace") || text.includes("relax"))
      emotion = "calm"

  if(text.includes("happy") || text.includes("joy"))
      emotion = "happy"

  if(text.includes("sad") || text.includes("bad"))
      emotion = "sad"

  const keywords = text.split(" ").slice(0,3)

  return {
    emotion,
    keywords,
    summary:`User feels ${emotion} while writing the journal`
  }

}