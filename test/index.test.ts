import {expect, test} from '@oclif/test'

import cmd = require('../src');

describe('title-case-cli', () => {
  test
  .stdout()
  .do(() => cmd.run(['hello', 'world']))
  .it("capitalizes 'hello world'", ctx => {
    expect(ctx.stdout).to.contain('Hello World')
  })
})
