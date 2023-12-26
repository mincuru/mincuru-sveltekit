import { describe, expect, it } from 'vitest';
// import { ServerLoadEvent } from '@svelte';
// import {render, fireEvent, screen} from '@testing-library/svelte'
import { _generateFilter } from './+page.server';
// import { ServerLoadEvent } from 'vitest';

describe('load test', () => {
  it('normal', async () => {
    const url = new URL('http://example.com/cars?makerNames=マツダ,日産');
    // サーバーコンポーネントのload関数を呼び出す
    const actual = await _generateFilter(url);
    expect(actual.makers.length).toBe(5);
    // actual.makers.map((m) => {
    //   expect(m.makerName).toBe('Toyota');
    // });
    // expect(add(1, 2)).toBe(3);
  });
});
