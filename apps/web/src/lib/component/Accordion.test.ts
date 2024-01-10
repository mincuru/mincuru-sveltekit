import { render, fireEvent, screen } from '@testing-library/svelte';
import Accordion from '$lib/component/Accordion.svelte';

describe('Accordion.svelte', async () => {
  test('render title', async () => {
    const { getByLabelText } = render(Accordion, { title: 'タイトル' });
    const toggleButtonLabel = getByLabelText('toggle-button-label');
    expect(toggleButtonLabel.textContent).toBe('タイトル');
  });

  // test('click toggle button', async () => {
  //   const { getByLabelText } = render(Accordion, { title: 'タイトル' });
  //   const button = getByLabelText('toggle-button-label');
  //   const slotContainer = getByLabelText('slot-container');
  //   expect(slotContainer.innerHTML).toContain('show');
  //   await fireEvent.click(button);
  //   expect(slotContainer.innerHTML).toContain('hidden');
  // });
});
