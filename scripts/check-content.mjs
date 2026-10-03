import assert from 'node:assert/strict';
import { publications, preprints, theses } from '../src/data/research.js';
import { awards, experience } from '../src/data/teaching.js';
import { conferences } from '../src/data/conferences.js';
import { profile } from '../src/data/profile.js';

// Source-migration checks: update these totals when intentionally adding/removing records.
assert.equal(publications.length, 17);
assert.equal(preprints.length, 6);
assert.equal(theses.length, 3);
assert.equal(awards.length, 2);
assert.equal(experience.length, 5);
assert.equal(conferences['Oral presentations'].length, 17);
assert.equal(conferences['Poster presentations'].length, 2);
assert.equal(conferences.Attendance.length, 8);
assert.equal(experience.reduce((n, entry) => n + entry.courses.length, 0), 29);
assert.equal(experience.reduce((n, entry) => n + entry.courses.reduce((m, term) => m + term.items.length, 0), 0), 76);
for (const records of [publications, preprints, theses]) {
  assert.equal(new Set(records.map(item => item.title)).size, records.length);
  for (const [index, item] of records.entries()) {
    assert.ok(item.title && item.authors && item.venue && Number.isInteger(item.year));
    if (index) assert.ok(records[index - 1].year >= item.year, 'Research records should be newest-first');
    if (item.url) assert.equal(new URL(item.url).protocol, 'https:');
  }
}
assert.equal([...publications, ...preprints, ...theses].filter(item => item.url).length, 21);
for (const link of profile.links) assert.equal(new URL(link.url).protocol, 'https:');
assert.equal(profile.institution, 'UNSW Sydney');
assert.ok(!experience[0].date.includes('present'));
console.log('Content checks passed: 26 research records, 27 conference records, 5 teaching roles, 29 terms, 76 course entries.');
