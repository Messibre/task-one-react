import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ' +
  'disabled:pointer-events-none disabled:opacity-50 ' +
  'disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',

  secondary:
    'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',

  outline:
    'border border-gray-300 bg-transparent text-gray-700 ' +
    'hover:bg-gray-50 focus:ring-blue-500',

  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',

  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0',
};

const Spinner = () => (
  <span
    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    aria-hidden="true"
  />
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      asChild = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    /*
     * asChild is intended for cases such as:
     *
     * <Button asChild>
     *   <Link href="/login">Login</Link>
     * </Button>
     *
     * We clone the child so it receives the Button styles/props.
     */
    if (asChild) {
      const child = React.Children.only(children);

      if (!React.isValidElement(child)) {
        throw new Error(
          'Button with asChild requires a single valid React element as its child.'
        );
      }

      return React.cloneElement(child, {
        ...props,
        ref,
        className: [classes, child.props.className]
          .filter(Boolean)
          .join(' '),
        'aria-disabled': disabled || loading ? true : undefined,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && <Spinner />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
