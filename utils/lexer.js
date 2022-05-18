const tokens = [
  'CREATE_DB',
  'DELETE_DB',
  'CREATE_GROUP',
  'DELETE_GROUP',
  'INSERT',
  'QUERY',
  'DELETE',
  'REPLACE'
]

class Token {
  constructor(val) {
    this.val = val
    if (typeof this.val == 'string') return `"token": "${this.val}"`
  }
}

class Lexer {
  /**
   * @param {string} data
   */
  constructor(data) {
    this.data = data
    this.pos = -1
    this.char = null
  }

  nextChar() {
    this.pos += 1
    this.char = this.pos < this.data.length ? this.data[this.pos] : null
  }

  genTokens() {
    let tokenList = []
    let currentKeyword = ''
    do {
      currentKeyword.concat(this.char)
      switch (currentKeyword) {
        
      }
      if (currentKeyword == 'create db') {
        let currentKeyword = ''
        tokenList.push(new Token(tokens[0]))
        this.nextChar()
      } else if (currentKeyword == 'delete db') {
        let currentKeyword = ''
        tokenList.push(new Token(tokens[1]))
        this.nextChar()
      } else if (currentKeyword == 'create group') {
        let currentKeyword = ''
        tokenList.push(new Token(tokens[2]))
        this.nextChar()
      } else if (currentKeyword == 'delete group') {
        let currentKeyword = ''
        tokenList.push(new Token(tokens[0]))
        this.nextChar()
      } else if (currentKeyword == 'insert') {
        let currentKeyword = ''
        tokenList.push(new Token(tokens[0]))
        this.nextChar()
      }
    } while (this.char != null)
    return tokens
  }
}