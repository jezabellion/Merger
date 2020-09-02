import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, f as claim_text, c as claim_element, b as children, d as detach, g as attr, h as add_location, k as insert, l as append, n as noop } from './chunk.18878dad.js';

/* src/routes/index.svelte generated by Svelte v3.6.7 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, h1, t1, t2, p0, t3, a0, t4, t5, div1, div0, input, t6, div2, p1, span, select, option, t7, t8, div3, a1, t9, t10, a2, t11;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Bulma");
			t2 = space();
			p0 = element("p");
			t3 = text("Modern CSS framework based on ");
			a0 = element("a");
			t4 = text("Flexbox");
			t5 = space();
			div1 = element("div");
			div0 = element("div");
			input = element("input");
			t6 = space();
			div2 = element("div");
			p1 = element("p");
			span = element("span");
			select = element("select");
			option = element("option");
			t7 = text("Select dropdown");
			t8 = space();
			div3 = element("div");
			a1 = element("a");
			t9 = text("Primary");
			t10 = space();
			a2 = element("a");
			t11 = text("Link");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n     ");

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Bulma");
			h1_nodes.forEach(detach);
			t2 = claim_text(nodes, "\n\n      ");

			p0 = claim_element(nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t3 = claim_text(p0_nodes, "Modern CSS framework based on ");

			a0 = claim_element(p0_nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			t4 = claim_text(a0_nodes, "Flexbox");
			a0_nodes.forEach(detach);
			p0_nodes.forEach(detach);
			t5 = claim_text(nodes, "\n\n      ");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			input = claim_element(div0_nodes, "INPUT", { class: true, type: true, placeholder: true }, false);
			var input_nodes = children(input);

			input_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t6 = claim_text(nodes, "\n\n      ");

			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			p1 = claim_element(div2_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			span = claim_element(p1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			select = claim_element(span_nodes, "SELECT", {}, false);
			var select_nodes = children(select);

			option = claim_element(select_nodes, "OPTION", { value: true }, false);
			var option_nodes = children(option);

			t7 = claim_text(option_nodes, "Select dropdown");
			option_nodes.forEach(detach);
			select_nodes.forEach(detach);
			span_nodes.forEach(detach);
			p1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t8 = claim_text(nodes, "\n\n      ");

			div3 = claim_element(nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			a1 = claim_element(div3_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t9 = claim_text(a1_nodes, "Primary");
			a1_nodes.forEach(detach);
			t10 = claim_text(div3_nodes, "\n        ");

			a2 = claim_element(div3_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t11 = claim_text(a2_nodes, "Link");
			a2_nodes.forEach(detach);
			div3_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Sapper project template";
			attr(h1, "class", "title");
			add_location(h1, file, 5, 5, 76);
			attr(a0, "href", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox");
			add_location(a0, file, 10, 38, 187);
			attr(p0, "class", "subtitle");
			add_location(p0, file, 9, 6, 128);
			attr(input, "class", "input");
			attr(input, "type", "text");
			attr(input, "placeholder", "Input");
			add_location(input, file, 15, 10, 386);
			attr(div0, "class", "control");
			add_location(div0, file, 14, 8, 354);
			attr(div1, "class", "field");
			add_location(div1, file, 13, 6, 326);
			option.__value = "Select dropdown";
			option.value = option.__value;
			add_location(option, file, 23, 14, 590);
			add_location(select, file, 22, 12, 567);
			attr(span, "class", "select");
			add_location(span, file, 21, 10, 533);
			attr(p1, "class", "control");
			add_location(p1, file, 20, 8, 503);
			attr(div2, "class", "field");
			add_location(div2, file, 19, 6, 475);
			attr(a1, "href", "about");
			attr(a1, "class", "button is-primary");
			add_location(a1, file, 30, 8, 726);
			attr(a2, "href", "blog");
			attr(a2, "class", "button is-link");
			add_location(a2, file, 31, 8, 788);
			attr(div3, "class", "buttons");
			add_location(div3, file, 29, 6, 696);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p0, anchor);
			append(p0, t3);
			append(p0, a0);
			append(a0, t4);
			insert(target, t5, anchor);
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, input);
			insert(target, t6, anchor);
			insert(target, div2, anchor);
			append(div2, p1);
			append(p1, span);
			append(span, select);
			append(select, option);
			append(option, t7);
			insert(target, t8, anchor);
			insert(target, div3, anchor);
			append(div3, a1);
			append(a1, t9);
			append(div3, t10);
			append(div3, a2);
			append(a2, t11);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(p0);
				detach(t5);
				detach(div1);
				detach(t6);
				detach(div2);
				detach(t8);
				detach(div3);
			}
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;