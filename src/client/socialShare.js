const WIDGET_CLASS = 'omi-social-share';

function shareUrl(provider, url, title) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} ${url}`);

  if (provider === 'facebook') {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  }
  if (provider === 'linkedin') {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  }
  return `https://bsky.app/intent/compose?text=${encodedText}`;
}

function createLink(label, provider, url, title) {
  const link = document.createElement('a');
  link.className = 'omi-social-share__button';
  link.href = shareUrl(provider, url, title);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = label;
  link.setAttribute('aria-label', `${label}: ${title}`);
  return link;
}

function renderWidget() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  const currentUrl = window.location.href;
  const title = document.title || 'Open Manuscript Initiative';
  let widget = footer.querySelector(`.${WIDGET_CLASS}`);

  if (!widget) {
    widget = document.createElement('div');
    widget.className = WIDGET_CLASS;
    widget.setAttribute('aria-label', 'Share this page');

    const label = document.createElement('span');
    label.className = 'omi-social-share__label';
    label.textContent = 'Share';
    widget.append(label);

    footer.querySelector('.container')?.append(widget);
  }

  widget.querySelectorAll('.omi-social-share__button').forEach((item) => item.remove());

  if (typeof navigator.share === 'function') {
    const nativeButton = document.createElement('button');
    nativeButton.type = 'button';
    nativeButton.className = 'omi-social-share__button';
    nativeButton.textContent = 'Share…';
    nativeButton.addEventListener('click', async () => {
      try {
        await navigator.share({ title, url: currentUrl });
      } catch (error) {
        if (error?.name !== 'AbortError') console.warn('Native sharing failed.', error);
      }
    });
    widget.append(nativeButton);
  }

  widget.append(
    createLink('Facebook', 'facebook', currentUrl, title),
    createLink('LinkedIn', 'linkedin', currentUrl, title),
    createLink('Bluesky', 'bluesky', currentUrl, title),
  );
}

export function onRouteDidUpdate() {
  window.requestAnimationFrame(renderWidget);
}

export function onRouteUpdate() {
  window.requestAnimationFrame(renderWidget);
}
