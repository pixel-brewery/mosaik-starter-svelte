<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { MosaikButton } from '@pixel-brewery/mosaik-elements-svelte/components/button';
  import { MosaikIcon } from '@pixel-brewery/mosaik-elements-svelte/components/icon';
  import { MosaikPulse } from '@pixel-brewery/mosaik-elements-svelte/components/pulse';
  import { MosaikStack } from '@pixel-brewery/mosaik-elements-svelte/components/stack';
  import { MosaikText } from '@pixel-brewery/mosaik-elements-svelte/components/text';

  // The published wrapper forwards HTML attributes; its declarations currently omit them.
  // Keep those forwarded attributes checked against Svelte's native HTML contract.
  const attributes = {
    root: { class: 'starter' },
    container: { class: 'starter__container' },
    card: { class: 'starter__card' },
    header: { class: 'starter__header' },
    intro: { class: 'starter__intro' },
    title: { class: 'starter__title', role: 'heading', 'aria-level': 1 },
    description: { class: 'starter__description' },
    content: { class: 'starter__content' },
    pulse: { class: 'starter__pulse' },
    icon: { class: 'starter__icon', 'aria-hidden': true },
    message: { class: 'starter__message' },
    counter: { class: 'starter__counter', 'data-testid': 'counter', role: 'status', 'aria-live': 'polite' },
    hint: { class: 'starter__hint' },
    action: { class: 'starter__action', 'data-testid': 'increment', onclick: increment },
  } satisfies Record<string, HTMLAttributes<HTMLElement>>;

  let clicks = $state(0);
  const counterLabel = $derived(`${clicks} ${clicks === 1 ? 'click' : 'clicks'}`);

  function increment(): void {
    clicks += 1;
  }
</script>

<main>
  <MosaikStack {...attributes.root} orientation="vertical" fit="width">
    <MosaikStack {...attributes.container} orientation="vertical" fit="width">
      <MosaikStack {...attributes.card} orientation="vertical" fit="width">
        <MosaikStack {...attributes.header} orientation="horizontal" verticalAlignment="top">
          <MosaikStack {...attributes.intro} orientation="vertical">
            <MosaikText {...attributes.title} text="Mosaik starter" />
            <MosaikText
              {...attributes.description}
              text="A small starting point for your next web app."
              wrap={true}
            />
          </MosaikStack>
        </MosaikStack>
        <MosaikStack
          {...attributes.content}
          orientation="vertical"
          horizontalAlignment="center"
          verticalAlignment="center"
          fit="width"
        >
          <MosaikPulse {...attributes.pulse} count={2} duration="3.6s" variant="neutral">
            <MosaikIcon {...attributes.icon} icon="sparkles" />
          </MosaikPulse>
          <MosaikStack {...attributes.message} orientation="vertical" horizontalAlignment="center">
            <MosaikText
              {...attributes.counter}
              text={counterLabel}
              wrap={true}
              alignment="center"
            />
            <MosaikText
              {...attributes.hint}
              text="This counter is local to your app."
              wrap={true}
              alignment="center"
            />
          </MosaikStack>
          <MosaikButton
            {...attributes.action}
            label="Add a click"
            variant="primary"
            appearance="solid"
            size="small"
            icon="plus"
            iconSize="small"
          />
        </MosaikStack>
      </MosaikStack>
    </MosaikStack>
  </MosaikStack>
</main>
