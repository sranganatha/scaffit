{{#if isNextJS}}
import { render, screen } from '@testing-library/react';
import { expect, test, describe } from '@jest/globals';

// Example component test
describe('Example Component', () => {
  test('renders without crashing', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('handles user interaction', () => {
    render(<button>Click me</button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// Example utility function test
describe('Utility Functions', () => {
  test('adds two numbers correctly', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(2, 3)).toBe(5);
  });

  test('handles edge cases', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});
{{/if}}

{{#if isVue}}
import { mount } from '@vue/test-utils';
import { expect, test, describe } from '@jest/globals';

// Example component test
describe('Example Component', () => {
  test('renders without crashing', () => {
    const wrapper = mount({
      template: '<div>Hello World</div>'
    });
    expect(wrapper.text()).toBe('Hello World');
  });

  test('handles user interaction', () => {
    const wrapper = mount({
      template: '<button @click="handleClick">Click me</button>',
      methods: {
        handleClick() {
          this.$emit('click');
        }
      }
    });
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

// Example utility function test
describe('Utility Functions', () => {
  test('adds two numbers correctly', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(2, 3)).toBe(5);
  });

  test('handles edge cases', () => {
    const add = (a: number, b: number) => a + b;
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });
});
{{/if}}

{{#if isExpress}}
import { expect, test, describe } from '@jest/globals';

// Example API route test
describe('API Routes', () => {
  test('health check endpoint', () => {
    const healthCheck = () => ({ status: 'ok', timestamp: new Date().toISOString() });
    const result = healthCheck();
    expect(result.status).toBe('ok');
    expect(result.timestamp).toBeDefined();
  });

  test('user creation endpoint', () => {
    const createUser = (userData: { name: string; email: string }) => ({
      id: '{{USER_ID}}',
      ...userData,
      createdAt: new Date().toISOString()
    });
    
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const result = createUser(userData);
    expect(result.name).toBe(userData.name);
    expect(result.email).toBe(userData.email);
    expect(result.id).toBeDefined();
  });
});

// Example utility function test
describe('Utility Functions', () => {
  test('validates email format', () => {
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});
{{/if}}