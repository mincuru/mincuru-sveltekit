import { render, fireEvent, screen } from '@testing-library/svelte';
import Tag from '$lib/component/Tag.svelte';

describe('Tag.svelte', async () => {
  test('render title', async () => {
    const removeTag = (value: string) => {};
    const { getByLabelText } = render(Tag, {
      title: 'タイトル',
      value: '値',
      removeTag: removeTag
    });
    const buttonLabel = getByLabelText('button-label');
    expect(buttonLabel.firstChild?.textContent).toEqual('タイトル');
  });
});
