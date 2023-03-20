import { WordShortnerPipe } from './word-shortner.pipe';

describe('WordShortnerPipe', () => {
  it('create an instance', () => {
    const pipe = new WordShortnerPipe();
    expect(pipe).toBeTruthy();
  });
});
