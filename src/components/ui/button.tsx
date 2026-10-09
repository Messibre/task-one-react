import React from 'react';
import { Share2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'share';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
  icon?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',

  secondary:
    'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',

  outline:
    'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',

  ghost:
    'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',

  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',

  share:
    'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
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
      icon,
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

    // Normal button
    if (!asChild) {
      const iconSize =
        size === 'sm' ? 'h-3.5 w-3.5' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';

      const renderIcon = () => {
        if (loading) return <Spinner />;
        if (icon) return icon;
        if (variant === 'share') {
          return (
            <Share2
              className={`${iconSize} shrink-0`}
              aria-hidden="true"
              data-testid="share-icon"
            />
          );
        }
        return null;
      };

      const buttonContent =
        children ?? (variant === 'share' && size !== 'icon' ? 'Share' : null);

      const ariaLabel =
        props['aria-label'] ||
        (variant === 'share' && !children ? 'Share' : undefined);

      return (
        <button
          ref={ref}
          className={classes}
          disabled={disabled || loading}
          aria-busy={loading || undefined}
          aria-label={ariaLabel}
          {...props}
        >
          {renderIcon()}
          {buttonContent}
        </button>
      );
    }

    // asChild requires exactly one React element
    const child = React.Children.only(
      children
    ) as React.ReactElement<{
      className?: string;
      disabled?: boolean;
      'aria-disabled'?: boolean;
      'aria-busy'?: boolean;
    }>;

    return React.cloneElement(child, {
      ...props,
      className: [classes, child.props.className]
        .filter(Boolean)
        .join(' '),
      'aria-disabled': disabled || loading || undefined,
      'aria-busy': loading || undefined,
    });
  }
);

Button.displayName = 'Button';

