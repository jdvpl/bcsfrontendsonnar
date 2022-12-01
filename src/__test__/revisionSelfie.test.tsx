import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import 'jest-canvas-mock';
import React from 'react'
import RevisionImagenes from '../pages/validacion-biometrica/revision-imagenes/revision-selfie';
import { AplicationContext } from '../context/AplicationContext';

describe('render images', () => {
  it('render images', () => {
    const selfies = {
      sonriendo:
        'data:image/png;base64,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j+7fvOHo6P73nvlqdP/C43dG9//qe6Oj+99ftCO6/5YNz0f3v3n71Oj+ohFro/tDt+6K7n/iP86J7rsAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSgy///MToA9OPvSm6/6VHz4juv3fdodH9j+9bHN1f+/xHovvjlv40uj9q6Kzo/jfGbI7uX3viyuj+1tlrovu/esm66P66U3dG9197cml0f9WSp6P7+0YcG913AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQZGPP+n0Qf+ZtS+6P6eZfdE95csWRzdf8vlE6P7R7/woej+Ty6aE92f/vjF0f0F64+M7i864aTo/iMjs7+vp69bE92/Y/em6P51p2yM7l/9Pwej+6+ednZ03wUAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQa3L/rTdEHtlw2FN1ftvGr0f3x/zw2uv97P/5odH/9X/4wun/+yQui+1+/c190/4e75kT3nzzx8Oj+194zKbp//Y5jo/tTLp4Z3X9w4pXR/WcvGB7dX7JyXXTfBQBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBqccd090Qcmffsz0f3Zo1dH9686Zm90f9yKl6L7e0+5MLq/6frZ0f0H986K7r/3u9m//3lblkf3dxy3Nbr/rn/8fnT/0mk3R/c3P/n16P4r434zun9g8sTovgsAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACg1cPkRe6MP7JmxIbr/8Krsv3/O0J9H939j/YTo/hlzr4juv3no0uj+mAe/Hd3ffvZx0f3f/sim6P5Fa2ZF9//4z94Z3R/xgWei+6cvOy+6/9KZx0T3b/n7M6P7LgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoNTgsFuzDXj9iX+K7v/We2ZF98/ftjy6f9KM8dH9c255f3T/tnn/Gt2/Zuqo6P67/mh0dH/O0Lro/t1vvTa6//LjI6P7j0/ZEt2/bfLM6P45tx0T3b9//tHRfRcAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBq8L6LV0UfuP/g+Oj+v33jtOj+edc9G93/6cO7o/uHrfhCdP/zk38Q3f/P3cOi+2877fzo/sL3nxvdn//A5dH9/WeujO5vO3VKdH/mpadE97ff8lp0/7wvPh3ddwEAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKX+PwAA//9+94bFC647pAAAAABJRU5ErkJggg==',
      normal:
        'data:image/png;base64,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j+7fvOHo6P73nvlqdP/C43dG9//qe6Oj+99ftCO6/5YNz0f3v3n71Oj+ohFro/tDt+6K7n/iP86J7rsAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSgy///MToA9OPvSm6/6VHz4juv3fdodH9j+9bHN1f+/xHovvjlv40uj9q6Kzo/jfGbI7uX3viyuj+1tlrovu/esm66P66U3dG9197cml0f9WSp6P7+0YcG913AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQZGPP+n0Qf+ZtS+6P6eZfdE95csWRzdf8vlE6P7R7/woej+Ty6aE92f/vjF0f0F64+M7i864aTo/iMjs7+vp69bE92/Y/em6P51p2yM7l/9Pwej+6+ednZ03wUAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQa3L/rTdEHtlw2FN1ftvGr0f3x/zw2uv97P/5odH/9X/4wun/+yQui+1+/c190/4e75kT3nzzx8Oj+194zKbp//Y5jo/tTLp4Z3X9w4pXR/WcvGB7dX7JyXXTfBQBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBqccd090Qcmffsz0f3Zo1dH9686Zm90f9yKl6L7e0+5MLq/6frZ0f0H986K7r/3u9m//3lblkf3dxy3Nbr/rn/8fnT/0mk3R/c3P/n16P4r434zun9g8sTovgsAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACg1cPkRe6MP7JmxIbr/8Krsv3/O0J9H939j/YTo/hlzr4juv3no0uj+mAe/Hd3ffvZx0f3f/sim6P5Fa2ZF9//4z94Z3R/xgWei+6cvOy+6/9KZx0T3b/n7M6P7LgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoNTgsFuzDXj9iX+K7v/We2ZF98/ftjy6f9KM8dH9c255f3T/tnn/Gt2/Zuqo6P67/mh0dH/O0Lro/t1vvTa6//LjI6P7j0/ZEt2/bfLM6P45tx0T3b9//tHRfRcAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBq8L6LV0UfuP/g+Oj+v33jtOj+edc9G93/6cO7o/uHrfhCdP/zk38Q3f/P3cOi+2877fzo/sL3nxvdn//A5dH9/WeujO5vO3VKdH/mpadE97ff8lp0/7wvPh3ddwEAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKX+PwAA//9+94bFC647pAAAAABJRU5ErkJggg==',
    };
    render(
      <AplicationContext.Provider value={selfies}>
        <RevisionImagenes />;
      </AplicationContext.Provider>
    );
    const image1 = screen.getByTestId('image1');
    const image2 = screen.getByTestId('image2');
    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
  });
});
