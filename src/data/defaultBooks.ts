import { Book } from '../types';

export const CODE_YATRA_BOOK: Book = {
  id: 'code-yatra-2026',
  title: 'কোড-যাত্ৰা মহাপুথি: শূণ্যৰ পৰা এক্সপাৰ্ট ছফ্টৱেৰ ডেভেলপাৰ',
  subtitle: 'The Complete Assamese Developer Masterclass — ২০২৬ সংস্কৰণ',
  author: 'লেখকৰ নাম যোগ কৰিব লাগিব',
  edition: '২০২৬ প্ৰিমিয়াম সংস্কৰণ',
  publishedYear: '২০২৬',
  language: 'অসমীয়া (Assamese)',
  isbn: '',
  copyright: '© ২০২৬ | প্ৰকাশৰ আগতে লেখক আৰু অধিকাৰ-সংক্রান্ত তথ্য নিশ্চিত কৰিব লাগিব।',
  description: 'কম্পিউটাৰ বিজ্ঞান, প্ৰগ্ৰামিং আৰু আধুনিক ছফ্টৱেৰ নিৰ্মাণৰ বিষয়সমূহ অসমীয়া ভাষাত সহজভাৱে শিকিবলৈ প্ৰস্তুত কৰা এখন বিকাশাধীন শিক্ষামূলক গ্ৰন্থ।',
  coverColor: '#0f172a',
  coverBadge: 'The Complete Assamese Developer Masterclass',
  coverStyle: 'royal',
  tags: ['Python', 'DSA', 'FastAPI', 'React 19', 'Docker', 'DevOps', 'Edge AI', 'System Design'],
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-08-26T00:00:00.000Z',
  volumes: [
    {
      id: 'vol-1',
      title: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      description: 'কম্পিউটাৰ আৰ্কিটেকচাৰ, বাইনাৰী চিষ্টেম, এলগৰিদম আৰু আই/অ’ চক্ৰ',
      chapterIds: ['ch-1', 'ch-2', 'ch-3'],
    },
    {
      id: 'vol-2',
      title: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      description: 'মেম’ৰি মডেল, মিউটেবিলিটি, পেটাৰ্ণ মেচিং, জেনেৰেটৰ আৰু ডেকৰেটৰ',
      chapterIds: ['ch-4', 'ch-5', 'ch-6', 'ch-7'],
    },
    {
      id: 'vol-3',
      title: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      description: 'লিনিয়াৰ আৰু নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ, গ্ৰাফ আৰু ছৰ্টিং এলগৰিদম',
      chapterIds: ['ch-8', 'ch-9', 'ch-10'],
    },
    {
      id: 'vol-4',
      title: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      description: 'OOP স্তম্ভ, SOLID নীতি, ডিজাইন পেটাৰ্ণ (Strategy & Factory)',
      chapterIds: ['ch-11', 'ch-12'],
    },
    {
      id: 'vol-5',
      title: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      description: 'AsyncIO, Non-blocking I/O, Logging আৰু কাষ্টম এক্সেপচন হেণ্ডলিং',
      chapterIds: ['ch-14', 'ch-16'],
    },
    {
      id: 'vol-6',
      title: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      description: 'SQL, SQLite, ACID ধৰ্ম, FastAPI ২০২৬ আৰু JWT Auth',
      chapterIds: ['ch-17', 'ch-19'],
    },
    {
      id: 'vol-7',
      title: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      description: 'Modern JavaScript (ES6+), React 19 Components, CORS & API Client',
      chapterIds: ['ch-20', 'ch-21'],
    },
    {
      id: 'vol-8',
      title: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      description: 'Git, GitHub Actions CI/CD, Pytest (TDD), Docker, Edge AI আৰু ৬ মহীয়া ৰোডমেপ',
      chapterIds: ['ch-22', 'ch-23', 'ch-24', 'ch-25', 'ch-appendix'],
    },
  ],
  chapters: [
    {
      id: 'ch-1',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ১: কম্পিউটাৰ আৰ্কিটেকচাৰ, মেম’ৰি আৰু বাইনাৰী চিষ্টেম',
      subtitle: 'Von Neumann Architecture, CPU, Registers, Memory আৰু Binary Arithmetic',
      estimatedReadTime: '20–30 min',
      topics: ['Von Neumann Architecture', 'CPU, ALU & CU', 'Registers & Cache', 'RAM & Storage', 'Bits, Bytes & Binary', 'Hexadecimal'],
      content: \`## এই অধ্যায়ৰ লক্ষ্য

এই অধ্যায় পঢ়াৰ পিছত আপুনি CPU, memory, binary আৰু hexadecimal-ৰ মৌলিক ধাৰণা বুজাব পাৰিব; decimal আৰু binary ৰূপান্তৰ কৰিব পাৰিব; আৰু Python-ত bitwise operator-ৰ ফল ব্যাখ্যা কৰিব পাৰিব।

## ১.১ কম্পিউটাৰ আৰ্কিটেকচাৰ কি?

কম্পিউটাৰ আৰ্কিটেকচাৰ (Computer Architecture) বুলিলে কম্পিউটাৰৰ processor, memory, input-output আৰু এই অংশসমূহে কেনেদৰে একেলগে কাম কৰে তাৰ মৌলিক নক্সা আৰু নিয়মসমূহক বুজায়।

### Von Neumann Architecture

১৯৪৫ চনৰ First Draft of a Report on the EDVAC নথিখনৰ সৈতে Von Neumann architecture-ৰ ঐতিহাসিক ধাৰণাটো জড়িত। ইয়াৰ এটা মূল বৈশিষ্ট্য হৈছে—প্ৰগ্ৰামৰ নিৰ্দেশনা আৰু ডেটা একে read-write memory-ত সংৰক্ষণ কৰা হয়। আধুনিক কম্পিউটাৰত ইয়াৰ বহু উন্নত ৰূপ আৰু পৰিৱৰ্তন ব্যৱহাৰ কৰা হয়।

সৰল ধাৰণাচিত্ৰ:

~~~text
        +----------------------+
        |      Input Unit      |
        +----------+-----------+
                   |
                   v
        +----------------------+
        |         CPU          |
        | +------+  +--------+ |
        | |  ALU |  |   CU   | |
        | +------+  +--------+ |
        |     Registers        |
        +----------+-----------+
                   |
             Data / Address
                Buses
                   |
                   v
        +----------------------+
        |      Main Memory     |
        | Instructions + Data |
        +----------------------+
                   |
                   v
        +----------------------+
        |     Output Unit      |
        +----------------------+
~~~

এই চিত্ৰটো শিক্ষামূলক সৰলীকৰণ; সকলো আধুনিক কম্পিউটাৰৰ ভিতৰৰ সংযোগ একে নহয়।

### CPU — Central Processing Unit

CPU-এ প্ৰগ্ৰামৰ নিৰ্দেশনা execute কৰে আৰু কম্পিউটাৰৰ বিভিন্ন কাৰ্য সমন্বয় কৰে।

- **ALU (Arithmetic Logic Unit):** যোগ, বিয়োগ, তুলনা, AND, OR আদি গাণিতিক আৰু যুক্তিগত অপাৰেচন কৰে।
- **Control Unit (CU):** নিৰ্দেশনা আনিবলৈ, decode কৰিবলৈ আৰু প্ৰয়োজনীয় অংশলৈ নিয়ন্ত্ৰণ সংকেত পঠিয়াবলৈ সহায় কৰে।
- **Registers:** CPU-ৰ ভিতৰত থকা অতি দ্ৰুত আৰু সৰু storage location। ইয়াত বৰ্তমান কামত লাগি থকা ডেটা, ঠিকনা বা নিৰ্দেশনাৰ অংশ সাময়িকভাৱে ৰখা হয়।

**মনত ৰাখিব:** সকলো register-ৰ আকাৰ একে নহয়। ৩২-bit বা ৬৪-bit CPU-ত সাধাৰণ integer register-ৰ আকাৰ সেই শব্দ-আকাৰৰ সৈতে মিলিব পাৰে, কিন্তু বিশেষ-purpose register-ৰ আকাৰ বেলেগ হ’ব পাৰে।

### Fetch–Decode–Execute Cycle

1. **Fetch:** মেম’ৰিৰ পৰা পৰৱৰ্তী নিৰ্দেশনা আনে।
2. **Decode:** নিৰ্দেশনাটোৱে কি কাম কৰিব লাগিব সেয়া বুজে।
3. **Execute:** নিৰ্দেশনাৰ কাম সম্পন্ন কৰে।
4. **Write back:** প্ৰয়োজন হ’লে ফলাফল register বা memory-ত লিখে।

এইটো এটা শিক্ষামূলক মডেল; বাস্তৱ CPU-ত pipelining, caching আৰু out-of-order execution-ৰ দৰে অধিক জটিল কৌশল থাকিব পাৰে।

## ১.২ মেম’ৰি: Register, Cache, RAM আৰু Storage

কম্পিউটাৰত মেম’ৰি একেটা বস্তু নহয়। বিভিন্ন ধৰণৰ storage-ৰ গতি, ক্ষমতা আৰু ব্যৱহাৰ বেলেগ।

| ধৰণ | সাধাৰণ ব্যৱহাৰ | বৈশিষ্ট্য |
|---|---|---|
| Register | CPU-ৰ তাৎক্ষণিক কাম | অতি সৰু আৰু অতি দ্ৰুত |
| Cache | সঘনাই ব্যৱহৃত ডেটা | CPU-ৰ ওচৰত; RAM-তকৈ সাধাৰণতে দ্ৰুত |
| RAM | চলি থকা প্ৰগ্ৰাম আৰু ডেটা | Volatile; বিদ্যুৎ বন্ধ হ’লে সাধাৰণতে ডেটা নাথাকে |
| SSD / HDD | দীৰ্ঘম্যাদী ফাইল সংৰক্ষণ | Non-volatile storage |

### RAM — Random Access Memory

RAM হৈছে কম্পিউটাৰৰ প্ৰাথমিক working memory। চলি থকা app, প্ৰগ্ৰাম আৰু ডেটাৰ বহু অংশ ইয়াত ৰখা হয়।

- RAM সাধাৰণতে **volatile**: বিদ্যুৎ যোগান বন্ধ হ’লে ইয়াৰ ডেটা নষ্ট হয়।
- RAM-ৰ ঠিকনা ব্যৱহাৰ কৰি ডেটাৰ স্থান চিনাক্ত কৰা হয়।
- অধিক RAM থাকিলে একেলগে অধিক প্ৰগ্ৰাম চলাবলৈ সহায় হ’ব পাৰে; কিন্তু কম্পিউটাৰৰ গতি কেৱল RAM-ৰ পৰিমাণৰ ওপৰত নিৰ্ভৰ নকৰে।

### Secondary Storage

- **HDD (Hard Disk Drive):** ঘূৰি থকা magnetic platter-ত ডেটা সংৰক্ষণ কৰে। সাধাৰণতে কম খৰচত অধিক capacity পোৱা যায়, কিন্তু mechanical অংশ থকাৰ বাবে latency বেছি।
- **SSD (Solid State Drive):** flash memory ব্যৱহাৰ কৰে আৰু চলন্ত mechanical platter নাথাকে। বহু সাধাৰণ কামত HDD-তকৈ দ্ৰুত, কিন্তু সকলো SSD-ৰ গতি একে নহয়।
- **NVMe SSD:** PCIe-ৰ ওপৰত NVMe protocol ব্যৱহাৰ কৰা SSD। গতি model, PCIe generation, workload আৰু cooling-ৰ ওপৰত নিৰ্ভৰ কৰে। বিজ্ঞাপনৰ সৰ্বোচ্চ sequential speed-কে সকলো কামৰ বাস্তৱ গতি বুলি ধৰিব নালাগে।
- **Cloud Storage:** ইণ্টাৰনেটৰ জৰিয়তে দূৰৰ data centre-ত ফাইল সংৰক্ষণ কৰা সেৱা; উদাহৰণ AWS S3 আৰু Google Cloud Storage। ইয়াৰ বাবে network connection আৰু provider-ৰ নিয়ম প্ৰযোজ্য।

## ১.৩ Input, Output আৰু Bus

- **Input device:** Keyboard, mouse, microphone, camera আদি—কম্পিউটাৰলৈ ডেটা বা নিৰ্দেশনা দিয়ে।
- **Output device:** Monitor, speaker, printer আদি—কম্পিউটাৰৰ ফলাফল দেখুৱায় বা প্ৰদান কৰে।
- **Data Bus:** অংশসমূহৰ মাজত ডেটা স্থানান্তৰ কৰে।
- **Address Bus:** কোন memory location বা device-ৰ সৈতে যোগাযোগ কৰা হ’ব সেয়া নিৰ্দেশ কৰে।
- **Control signals:** পঢ়া, লিখা আৰু অন্যান্য কাৰ্যৰ সময় সমন্বয় কৰে।

বাস্তৱ আধুনিক system-ত bus আৰু interconnect-ৰ গঠন অধিক জটিল; ওপৰৰ বৰ্ণনা মৌলিক ধাৰণাৰ বাবে।

## ১.৪ Bit, Nibble আৰু Byte

কম্পিউটাৰৰ ডিজিটেল ডেটা binary digit-ৰ সহায়ত প্ৰকাশ কৰা হয়।

- **Bit:** Binary digit; ইয়াৰ মান ০ বা ১।
- **Nibble:** ৪ bit।
- **Byte:** ৮ bit। এটা byte-এ 2⁸ = 256 টা পৃথক bit-pattern প্ৰকাশ কৰিব পাৰে।

### Storage unit: দুটা convention মনত ৰাখিব

দৈনন্দিন computing-ত দুটা একক-পদ্ধতি দেখা যায়:

| একক | Decimal (SI) | Binary (IEC) |
|---|---:|---:|
| kilo / Ki | 1,000 bytes (kB) | 1,024 bytes (KiB) |
| mega / Mi | 1,000,000 bytes (MB) | 1,048,576 bytes (MiB) |
| giga / Gi | 1,000,000,000 bytes (GB) | 1,073,741,824 bytes (GiB) |
| tera / Ti | 1,000,000,000,000 bytes (TB) | 1,099,511,627,776 bytes (TiB) |

**গুৰুত্বপূৰ্ণ:** 1 KB = 1024 bytes বুলি বহু পুৰণি পাঠ্যত লিখা হয়। সঠিক binary একক হৈছে 1 KiB = 1024 bytes; SI অনুসৰি 1 kB = 1000 bytes। এই কিতাপত দুয়োটা পৃথককৈ ব্যৱহাৰ কৰা হ’ব।

## ১.৫ Binary Number System

Decimal system-ত ১০টা digit (০–৯) ব্যৱহাৰ হয়। Binary system-ত মাত্ৰ দুটা digit—০ আৰু ১—ব্যৱহাৰ হয়। প্ৰতিটো স্থানৰ মান ২-ৰ ঘাত অনুসৰি বৃদ্ধি পায়।

উদাহৰণ: Binary 1101₂ ক Decimal-লৈ ৰূপান্তৰ:

1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰ = 8 + 4 + 0 + 1 = 13

সেয়ে 1101₂ = 13₁₀।

### Decimal 13 ক Binary-লৈ ৰূপান্তৰ

২-ৰে ভাগ কৰি remainder লিখোঁ:

| ভাগ | ভাগফল | অৱশিষ্ট |
|---|---:|---:|
| 13 ÷ 2 | 6 | 1 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

অৱশিষ্ট তলৰ পৰা ওপৰলৈ পঢ়িলে 1101₂। সেয়ে 13₁₀ = 1101₂।

আন এটা উদাহৰণ: 10110₂

1 × 2⁴ + 0 × 2³ + 1 × 2² + 1 × 2¹ + 0 × 2⁰ = 16 + 0 + 4 + 2 + 0 = 22

সেয়ে 10110₂ = 22₁₀।

## ১.৬ Python-ত Bitwise Operations

Python-ত integer-ৰ ওপৰত bitwise operator ব্যৱহাৰ কৰিব পাৰি।

~~~python
a = 5       # binary 0101
b = 3       # binary 0011

print(a & b)   # AND: 1
print(a | b)   # OR: 7
print(a ^ b)   # XOR: 6
print(a << 1)  # Left shift: 10
print(a >> 1)  # Right shift: 2
print(~a)      # -6
~~~

| Operator | অৰ্থ | 0101 আৰু 0011-ৰ ফল |
|---|---|---|
| & | AND: দুয়োটা bit 1 হ’লেহে 1 | 0001 |
| \`|\` | OR: যিকোনো এটা bit 1 হ’লে 1 | 0111 |
| ^ | XOR: bit দুটা বেলেগ হ’লে 1 | 0110 |
| << | বাওঁফালে shift | 0101 << 1 = 1010 |
| >> | সোঁফালে shift | 0101 >> 1 = 0010 |

**Python-ৰ NOT (~) সম্পৰ্কে সাৱধানতা:** Python integer fixed 8-bit বা 32-bit unsigned value নহয়। Python-ত ~x-ৰ ফল -(x + 1); সেয়ে ~5-ৰ ফল -6। ইয়াক কেৱল ৪টা bit উলটাই 1010 পোৱা বুলি ব্যাখ্যা কৰিলে ভুল হ’ব।

Hexadecimal-ত ১৬টা digit ব্যৱহাৰ হয়: 0–9 আৰু A–F। ৪টা binary bit-এ এটা hexadecimal digit প্ৰকাশ কৰে।

~~~python
value = 0xFF
print(value)       # 255
print(bin(value))  # 0b11111111
print(hex(255))    # 0xff
~~~

## ১.৭ নিজে চেষ্টা কৰক

1. Bit আৰু Byte-ৰ মাজত পাৰ্থক্য কি?
2. ৪ bit-এ কিমানটা পৃথক pattern প্ৰকাশ কৰিব পাৰে?
3. 1011₂ ক Decimal-লৈ ৰূপান্তৰ কৰক।
4. Decimal 18 ক Binary-লৈ ৰূপান্তৰ কৰক।
5. 1 kB আৰু 1 KiB-ৰ পাৰ্থক্য লিখক।
6. RAM কিয় volatile memory বুলি কোৱা হয়?
7. Register আৰু RAM-ৰ মাজত দুটা পাৰ্থক্য লিখক।
8. a = 6, b = 3 হ’লে a & b, a | b আৰু a ^ b-ৰ ফল কি?
9. Python-ত ~5 কিয় -6 হয়?
10. SSD আৰু HDD-ৰ মাজত মূল পাৰ্থক্য কি?

### উত্তৰসূচী

1. Bit হৈছে ০ বা ১; Byte হৈছে ৮ bit।
2. 2⁴ = 16 টা pattern।
3. 1011₂ = 8 + 0 + 2 + 1 = 11₁₀।
4. 18₁₀ = 10010₂।
5. 1 kB = 1000 bytes; 1 KiB = 1024 bytes।
6. বিদ্যুৎ যোগান বন্ধ হ’লে RAM-ৰ data সাধাৰণতে নাথাকে।
7. Register CPU-ৰ ভিতৰত অতি সৰু আৰু অতি দ্ৰুত; RAM অধিক capacity-ৰ working memory।
8. AND = 2, OR = 7, XOR = 5।
9. Python-ত ~x = -(x+1); সেয়ে ~5 = -6।
10. HDD magnetic platter ব্যৱহাৰ কৰে; SSD flash memory ব্যৱহাৰ কৰে।

## ১.৮ অধিক পঢ়াৰ বাবে নিৰ্ভৰযোগ্য উৎস

- John von Neumann, First Draft of a Report on the EDVAC (1945): https://www.wiley.com/en-us/First+Draft+of+a+Report+on+the+EDVAC-p-9780471648891
- Python official documentation — Bitwise Operations: https://docs.python.org/3/library/stdtypes.html#bitwise-operations-on-integer-types
- NIST — SI prefixes: https://www.nist.gov/pml/owm/metric-si-prefixes
- IEC — Prefixes for binary multiples (KiB, MiB, GiB): https://www.iec.ch/si-prefixes

**অধ্যায়ৰ সাৰাংশ:** কম্পিউটাৰে binary data-ৰ ওপৰত কাম কৰে। CPU-এ নিৰ্দেশনা execute কৰে; register আৰু cache-এ তাৎক্ষণিক কামত সহায় কৰে; RAM-এ চলি থকা program-ৰ data ৰাখে; আৰু SSD/HDD-এ দীৰ্ঘম্যাদী storage দিয়ে। Binary আৰু hexadecimal বুজিলে কম্পিউটাৰৰ ভিতৰৰ data representation বুজিবলৈ সহজ হয়।
\`,
    },
    {
      id: 'ch-2',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ২: এলগৰিদমিক চিন্তা আৰু সমস্যা সমাধানৰ বিজ্ঞান',
      subtitle: 'Algorithm Design, Pseudocode, Flowcharts, Testing আৰু Complexity',
      estimatedReadTime: '25–35 min',
      topics: ['Algorithm Fundamentals', 'Problem Decomposition', 'Pseudocode', 'Flowcharts', 'Python Implementation', 'Testing & Complexity'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- এলগৰিদম কি আৰু এটা ভাল এলগৰিদমৰ বৈশিষ্ট্য বুজাব পাৰিব।
- এটা ডাঙৰ সমস্যাক সৰু সৰু ধাপত ভাগ কৰিব পাৰিব।
- Pseudocode আৰু Flowchart ব্যৱহাৰ কৰি সমাধান পৰিকল্পনা কৰিব পাৰিব।
- সেই পৰিকল্পনাক Python কোডলৈ ৰূপান্তৰ কৰিব পাৰিব।
- সাধাৰণ test case আৰু edge case চিনাক্ত কৰিব পাৰিব।
- সময় আৰু অতিৰিক্ত মেম’ৰিৰ জটিলতাৰ প্ৰাথমিক ধাৰণা পাব।

## ২.১ এলগৰিদম (Algorithm) কি?

**এলগৰিদম** হৈছে কোনো সমস্যা সমাধান কৰিবলৈ অনুসৰণ কৰা স্পষ্ট, ক্ৰমবদ্ধ আৰু সীমিত সংখ্যক নিৰ্দেশনাৰ সমষ্টি। কম্পিউটাৰ প্ৰগ্ৰাম লিখাৰ আগতে এলগৰিদম সাজিলে সমস্যাটো কেনেকৈ সমাধান হ'ব সেয়া আগতেই পৰীক্ষা কৰিব পাৰি।

উদাহৰণ: দুটা সংখ্যাৰ যোগফল উলিওৱা।

1. প্ৰথম সংখ্যা A গ্ৰহণ কৰা।
2. দ্বিতীয় সংখ্যা B গ্ৰহণ কৰা।
3. A আৰু B যোগ কৰা।
4. যোগফল দেখুওৱা।
5. কাম শেষ কৰা।

এইটো এটা সৰল এলগৰিদম। ইয়াত নিৰ্দেশনাবোৰৰ ক্ৰম স্পষ্ট আৰু কামটো সীমিত ধাপত শেষ হয়।

### এটা ভাল এলগৰিদমৰ মুখ্য বৈশিষ্ট্য

- **Input (ইনপুট):** শূন্য বা ততোধিক ইনপুট থাকিব পাৰে। ইনপুটৰ ধৰণ আৰু সীমা স্পষ্ট হ'ব লাগে।
- **Output (আউটপুট):** কমেও এটা ফলাফল উৎপন্ন কৰিব লাগে।
- **Definiteness (নিৰ্দিষ্টতা):** প্ৰতিটো ধাপৰ অৰ্থ দ্ব্যৰ্থহীন হ'ব লাগে।
- **Finiteness (সসীমতা):** নিৰ্দিষ্ট সংখ্যক ধাপৰ পিছত এলগৰিদম শেষ হ'ব লাগে।
- **Effectiveness (কাৰ্যকৰীতা):** প্ৰতিটো ধাপ বাস্তৱত সম্পাদন কৰিব পৰা সৰল কাৰ্য হ'ব লাগে।
- **Correctness (শুদ্ধতা):** নিৰ্দিষ্ট অনুমান আৰু বৈধ ইনপুটৰ বাবে সঠিক ফল দিব লাগে।

মনত ৰাখিব: কেৱল কোড চলিলেই সমাধান শুদ্ধ নহয়। ভুল ফল দিয়া প্ৰগ্ৰামো চলিব পাৰে।

## ২.২ সমস্যা সমাধানৰ পৰিকল্পনা

প্ৰগ্ৰাম লিখাৰ আগতে তলৰ ক্ৰমটো অনুসৰণ কৰক।

1. **সমস্যাটো বুজক:** প্ৰশ্নটোৱে সঠিকভাৱে কি বিচাৰিছে?
2. **Input আৰু Output লিখক:** কি তথ্য পোৱা যাব আৰু কি ফল দিব লাগিব?
3. **সীমা আৰু অনুমান নিৰ্ধাৰণ কৰক:** ইনপুট খালী হ'ব পাৰেনে? ঋণাত্মক সংখ্যা থাকিব পাৰেনে? ডেটাৰ আকাৰ কিমান?
4. **উদাহৰণ সাজক:** এটা সাধাৰণ উদাহৰণ আৰু কেইটামান ব্যতিক্ৰমী উদাহৰণ হাতেৰে সমাধান কৰক।
5. **ধাপ বা Pseudocode লিখক:** প্ৰগ্ৰামিং ভাষাৰ syntax-ত নোসোমাই যুক্তিটো লিখক।
6. **Flowchart আঁকক:** সিদ্ধান্ত আৰু কাৰ্যৰ ক্ৰম দৃশ্যমান কৰক।
7. **কোড লিখক আৰু পৰীক্ষা কৰক:** সাধাৰণ, সীমান্তৱৰ্তী আৰু ভুল ইনপুটৰ test case চলাওক।

### সমস্যা ভাঙি সৰু কৰা (Decomposition)

ধৰক, এখন নম্বৰ তালিকাৰ ভিতৰত আটাইতকৈ ডাঙৰ সংখ্যাটো বিচাৰিব লাগে। সমস্যাটো সৰু ধাপত ভাগ কৰিব পাৰি:

- তালিকাখন খালী নে নহয় পৰীক্ষা কৰা।
- প্ৰথম সংখ্যাটোক বৰ্তমানৰ সৰ্বাধিক মান বুলি ধৰা।
- বাকী সংখ্যাবোৰ এটাৰ পিছত এটা পৰীক্ষা কৰা।
- বৰ্তমানৰ সৰ্বাধিক মানতকৈ ডাঙৰ সংখ্যা পালে মানটো সলনি কৰা।
- শেষত সৰ্বাধিক মানটো দেখুওৱা।

## ২.৩ Pseudocode (ছ্যুড'কোড)

**Pseudocode** হৈছে কোনো প্ৰগ্ৰামৰ যুক্তি সাধাৰণ ভাষা আৰু প্ৰগ্ৰামিং-সদৃশ নিৰ্দেশনাৰে লিখাৰ পদ্ধতি। ইয়াৰ কোনো এটা বাধ্যতামূলক programming-language syntax নাই। ইয়াৰ উদ্দেশ্য হৈছে কোড লিখাৰ আগতে যুক্তিটো স্পষ্ট কৰা।

সৰ্বাধিক সংখ্যা বিচৰাৰ Pseudocode:

```text
ALGORITHM FindMaximum(numbers)
    IF numbers is empty
        RETURN "No value"
    END IF

    maximum = first item in numbers

    FOR each remaining item
        IF item > maximum
            maximum = item
        END IF
    END FOR

    RETURN maximum
END ALGORITHM
```

Pseudocode-ত `IF`, `FOR`, `RETURN` আদি শব্দ ব্যৱহাৰ কৰা হৈছে। এইবোৰ যুক্তি বুজাবলৈ ব্যৱহৃত; Python-ৰ সম্পূৰ্ণ syntax নহয়।

## ২.৪ Flowchart (ফ্ল'চাৰ্ট)

**Flowchart** হৈছে এলগৰিদমৰ ধাপসমূহক বিভিন্ন আকৃতি আৰু কাঁড়-চিহ্নৰে দেখুওৱা চিত্ৰ।

### সাধাৰণ Flowchart চিহ্ন

| চিহ্নৰ আকৃতি | নাম | ব্যৱহাৰ |
|---|---|---|
| Oval / উপবৃত্ত | Start / End | আৰম্ভণি বা সমাপ্তি |
| Rectangle / আয়ত | Process | গণনা বা কোনো কাৰ্য |
| Parallelogram / সামান্তৰিক | Input / Output | তথ্য গ্ৰহণ বা ফল দেখুওৱা |
| Diamond / হীৰক | Decision | চৰ্ত পৰীক্ষা; সাধাৰণতে Yes/No শাখা |
| Arrow / কাঁড় | Flow line | পৰৱৰ্তী ধাপৰ দিশ দেখুৱায় |

### সৰ্বাধিক সংখ্যা বিচৰাৰ Flowchart-ৰ ধাৰণা

```text
       (আৰম্ভ)
           |
    / সংখ্যা গ্ৰহণ /
           |
     < তালিকা খালী নে? >
        /       \\
      হয়        নহয়
      |            |
 / "মান নাই" /  [max = প্ৰথম সংখ্যা]
      |            |
    (শেষ)     [পৰৱৰ্তী সংখ্যা লোৱা]
                   |
             < সংখ্যা আছে নে? >
                /       \\
              নাই       আছে
              |           |
        / max দেখুওৱা /  < সংখ্যা > max? >
              |             /       \\
            (শেষ)          হয়       নহয়
                            |          |
                       [max = সংখ্যা]  |
                            \\________/
                                 |
                          পৰৱৰ্তী সংখ্যা
```

এই চিত্ৰটো যুক্তিৰ পাঠ্য-ৰূপ। কাগজত আঁকিলে Start/End-ৰ বাবে Oval, Process-ৰ বাবে Rectangle, Input/Output-ৰ বাবে Parallelogram আৰু Decision-ৰ বাবে Diamond ব্যৱহাৰ কৰিব।

## ২.৫ Python-ত এলগৰিদম ৰূপায়ণ

এতিয়া একেটা যুক্তি Python-ত লিখোঁ।

```python
def find_maximum(numbers: list[int]) -> int | None:
    """তালিকাৰ সৰ্বাধিক সংখ্যা ঘূৰাই দিয়ে।
    খালী তালিকা পালে None ঘূৰাই দিয়ে।
    """
    if len(numbers) == 0:
        return None

    maximum = numbers[0]

    for index in range(1, len(numbers)):
        if numbers[index] > maximum:
            maximum = numbers[index]

    return maximum


print(find_maximum([3, 7, 2, 9, 1]))  # 9
print(find_maximum([-5, -2, -10]))    # -2
print(find_maximum([4]))              # 4
print(find_maximum([]))               # None
```

**কোডৰ ব্যাখ্যা:**

- `len(numbers) == 0`-এ তালিকাখন খালী নে পৰীক্ষা কৰে।
- `maximum = numbers[0]`-এ প্ৰথম উপাদানটোক প্ৰাৰম্ভিক সৰ্বাধিক মান হিচাপে লয়।
- `range(1, len(numbers))`-এ দ্বিতীয় উপাদানৰ পৰা শেষলৈকে সূচক দিয়ে।
- `numbers[index] > maximum` সত্য হ'লে সৰ্বাধিক মান আপডেট হয়।
- শেষত `return maximum`-এ ফলাফল ঘূৰাই দিয়ে।

এই উদাহৰণটো Python 3.10 বা তাৰ পিছৰ সংস্কৰণৰ type-hint syntax ব্যৱহাৰ কৰে, কাৰণ ইয়াত `int | None` লিখা হৈছে। Type hint-এ মানৰ ধৰণ বুজায়; ই নিজে runtime-ত ইনপুটৰ ধৰণ বাধ্যতামূলকভাৱে পৰীক্ষা নকৰে।

## ২.৬ Test Case আৰু Edge Case

এটা এলগৰিদম শুদ্ধ নে নহয় বুজিবলৈ বিভিন্ন ধৰণৰ ইনপুটেৰে পৰীক্ষা কৰিব লাগে।

| পৰীক্ষাৰ ধৰণ | ইনপুট | আশা কৰা ফল |
|---|---|---|
| সাধাৰণ তালিকা | `[3, 7, 2, 9, 1]` | `9` |
| ঋণাত্মক সংখ্যা | `[-5, -2, -10]` | `-2` |
| এটা উপাদান | `[4]` | `4` |
| সকলো একে | `[6, 6, 6]` | `6` |
| খালী তালিকা | `[]` | `None` |
| সৰ্বাধিক মান আৰম্ভণিতে | `[10, 3, 2]` | `10` |
| সৰ্বাধিক মান শেষত | `[1, 2, 10]` | `10` |

**Edge case** মানে এনে বিশেষ বা সীমান্তৱৰ্তী ইনপুট, যিয়ে সাধাৰণ পৰিস্থিতিত লুকাই থকা ভুল উলিয়াই আনিব পাৰে। উদাহৰণস্বৰূপে, খালী তালিকা আৰু এটা উপাদান থকা তালিকা।

## ২.৭ Time Complexity আৰু Space Complexity-ৰ প্ৰাথমিক ধাৰণা

এলগৰিদমৰ দক্ষতা আলোচনা কৰিবলৈ সাধাৰণতে দুটা কথা চোৱা হয়:

- **Time Complexity:** ইনপুটৰ আকাৰ বাঢ়িলে কামৰ ধাপ বা operation-ৰ সংখ্যা কেনেদৰে বাঢ়ে।
- **Space Complexity:** এলগৰিদম চলোঁতে প্ৰয়োজন হোৱা অতিৰিক্ত মেম’ৰি কেনেদৰে বাঢ়ে।

সৰ্বাধিক সংখ্যা বিচৰা উদাহৰণত তালিকাৰ প্ৰতিটো উপাদান সৰ্বাধিক এবাৰ পৰীক্ষা কৰা হয়। তালিকাত `n` টা উপাদান থাকিলে কামৰ পৰিমাণ `n`-ৰ সৈতে সমানুপাতিকভাৱে বাঢ়ে। সেয়ে ইয়াৰ Time Complexity হৈছে **O(n)**।

ইয়াত কেৱল কেইটামান স্থায়ী variable ব্যৱহাৰ কৰা হৈছে; নতুন তালিকা তৈয়াৰ কৰা হোৱা নাই। সেয়ে অতিৰিক্ত Space Complexity হৈছে **O(1)**।

| তালিকাৰ উপাদান | তুলনাৰ সংখ্যা (সৰ্বাধিক) |
|---:|---:|
| 1 | 0 |
| 3 | 2 |
| 5 | 4 |
| 10 | 9 |
| n | n − 1 |

**Big-O** হৈছে ইনপুটৰ আকাৰ ডাঙৰ হ'লে algorithm-ৰ বৃদ্ধিৰ হাৰ বৰ্ণনা কৰাৰ এটা পদ্ধতি। এই অধ্যায়ত O(n) আৰু O(1)-ৰ প্ৰাথমিক অৰ্থহে শিকোৱা হৈছে; পিছৰ অধ্যায়ত ইয়াক অধিক গভীৰভাৱে আলোচনা কৰিব পাৰি।

## ২.৮ সাধাৰণ ভুল আৰু সাৱধানতা

- তালিকা খালী হ'লে `numbers[0]` ব্যৱহাৰ কৰিলে `IndexError` হ'ব পাৰে। সেয়ে আগতে খালী নে পৰীক্ষা কৰিব লাগে।
- সৰ্বাধিক মান সদায় `0` বুলি ধৰি ল'ব নালাগে; সকলো সংখ্যা ঋণাত্মক হ'ব পাৰে।
- কেৱল এটা উদাহৰণেৰে প্ৰগ্ৰাম পৰীক্ষা নকৰিব।
- Pseudocode-ৰ ধাপ আৰু Python কোডৰ যুক্তি একে নে নহয় মিলাই চাব।
- Flowchart-ত Decision-ৰ পৰা ওলোৱা শাখাবোৰৰ অৰ্থ (যেনে হয়/নহয়) স্পষ্টকৈ লিখিব।

## ২.৯ অনুশীলনী

1. এলগৰিদমৰ সংজ্ঞা নিজৰ ভাষাত লিখক।
2. এটা ভাল এলগৰিদমৰ যিকোনো চাৰিটা বৈশিষ্ট্য লিখক।
3. Pseudocode আৰু Python code-ৰ মাজত দুটা পাৰ্থক্য লিখক।
4. Flowchart-ত Diamond চিহ্ন কিহৰ বাবে ব্যৱহাৰ কৰা হয়?
5. দুটা সংখ্যাৰ ভিতৰত সৰু সংখ্যাটো বিচৰাৰ Pseudocode লিখক।
6. `[8, 2, 11, 5]` তালিকাখনৰ সৰ্বাধিক সংখ্যা বিচাৰোঁতে কিমানটা তুলনা লাগে?
7. `[0, -3, -8]` ইনপুটৰ বাবে সৰ্বাধিক সংখ্যা কিমান?
8. সৰ্বাধিক সংখ্যা বিচৰা এলগৰিদমটোৰ Time Complexity কিয় O(n)?
9. খালী তালিকাৰ বাবে এটা test case কিয় প্ৰয়োজন?
10. এটা তালিকাৰ গড় (average) উলিওৱাৰ বাবে Input, Process আৰু Output চিনাক্ত কৰক।

### অনুশীলনীৰ উত্তৰ

1. সমস্যা সমাধানৰ বাবে স্পষ্ট আৰু ক্ৰমবদ্ধ সীমিত নিৰ্দেশনাৰ সমষ্টি।
2. Input, Output, Definiteness, Finiteness, Effectiveness, Correctness-ৰ যিকোনো চাৰিটা।
3. Pseudocode ভাষা-নিৰপেক্ষ যুক্তিৰ বৰ্ণনা; Python code-ত Python-ৰ নিয়ম মানি চলিব লাগে।
4. চৰ্ত বা সিদ্ধান্ত পৰীক্ষা কৰিবলৈ।
5. `A` আৰু `B` গ্ৰহণ কৰা; যদি `A < B` তেন্তে `A` ঘূৰাই দিয়া, অন্যথা `B` ঘূৰাই দিয়া।
6. 3টা তুলনা।
7. 0।
8. n টা উপাদানৰ প্ৰতিটো পৰীক্ষা কৰা হয়; সেয়ে কামৰ বৃদ্ধি n-ৰ সমানুপাতিক।
9. খালী তালিকাত প্ৰথম উপাদান নাথাকে; ভুল সূচক ব্যৱহাৰ ৰোধ কৰিবলৈ এই অৱস্থা পৰীক্ষা কৰা লাগে।
10. Input: সংখ্যাৰ তালিকা; Process: যোগফল ÷ উপাদানৰ সংখ্যা; Output: গড়। খালী তালিকাৰ ক্ষেত্ৰত ফলাফল কেনেকৈ দেখুৱাব সেয়াও নিৰ্ধাৰণ কৰিব লাগে।

## ২.১০ অধিক পঢ়াৰ উৎস

- Donald E. Knuth, *The Art of Computer Programming, Volume 1: Fundamental Algorithms* — algorithm-ৰ মৌলিক ধাৰণা।
- Python Official Tutorial — https://docs.python.org/3/tutorial/ — Python syntax আৰু control flow।
- Python Built-in Functions — https://docs.python.org/3/library/functions.html — `len()`, `range()`, `max()` আদি।
- OpenDSA — https://opendsa-server.cs.vt.edu/ — data structures আৰু algorithm-ৰ শিক্ষামূলক পাঠ।

## অধ্যায়ৰ সাৰাংশ

এলগৰিদমে সমস্যা সমাধানৰ যুক্তি ধাপে ধাপে প্ৰকাশ কৰে। Pseudocode-এ ভাষা-নিৰপেক্ষভাৱে যুক্তি লিখিবলৈ সহায় কৰে আৰু Flowchart-এ সেই ধাপসমূহ চিত্ৰৰূপে দেখুৱায়। Python-ত ৰূপায়ণ কৰাৰ পিছত সাধাৰণ test case আৰু edge case চলাই শুদ্ধতা পৰীক্ষা কৰিব লাগে। Time Complexity-এ কামৰ বৃদ্ধিৰ হাৰ আৰু Space Complexity-এ অতিৰিক্ত মেম’ৰিৰ প্ৰয়োজন বুজায়।`,
    },
    {
      id: 'ch-3',
      volume: 'খণ্ড ১: কম্পিউটাৰ বিজ্ঞানৰ মৌলিক ভেটি আৰু লজিক',
      title: 'অধ্যায় ৩: ইনপুট-আউটপুট চাইকেল, বাফাৰ আৰু ষ্ট্ৰীম',
      subtitle: 'Python Standard Streams, File Handling, Buffering আৰু Error Handling',
      estimatedReadTime: '25–35 min',
      topics: ['Input-Process-Output Cycle', 'stdin stdout stderr', 'Python Input Parsing', 'File Streams', 'Buffering and Flush', 'Safe File Handling'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- Input, Processing আৰু Output-ৰ সম্পৰ্ক বুজাব পাৰিব।
- Python-ৰ `stdin`, `stdout` আৰু `stderr` চিনাক্ত কৰিব পাৰিব।
- `input()`, `print()` আৰু `sys.stdin.readline()` ব্যৱহাৰ কৰিব পাৰিব।
- ফাইলক stream হিচাপে পঢ়া আৰু লিখাৰ পদ্ধতি বুজিব পাৰিব।
- Buffer আৰু `flush()`-ৰ কামৰ পাৰ্থক্য বুজাব পাৰিব।
- ফাইল খোলাৰ সময়ত encoding আৰু error handling কিয় প্ৰয়োজন বুজিব পাৰিব।

## ৩.১ Input–Process–Output (IPO) Cycle

কম্পিউটাৰে সাধাৰণতে তিনিটা মৌলিক কাম কৰে:

1. **Input (ইনপুট):** ব্যৱহাৰকাৰী, ফাইল, sensor বা আন এটা program-ৰ পৰা তথ্য গ্ৰহণ কৰা।
2. **Processing (প্ৰচেছিং):** CPU-এ নিৰ্দেশনা অনুসৰি তথ্যৰ ওপৰত কাম কৰা।
3. **Output (আউটপুট):** ফলাফল screen, file, printer বা আন system-লৈ পঠিওৱা।

উদাহৰণ: দুটা সংখ্যাৰ যোগফল উলিওৱা।

- Input: 12 আৰু 8
- Processing: 12 + 8
- Output: 20

```python
প্ৰথম_সংখ্যা = int(input("প্ৰথম সংখ্যা লিখক: "))
দ্বিতীয়_সংখ্যা = int(input("দ্বিতীয় সংখ্যা লিখক: "))

যোগফল = প্ৰথম_সংখ্যা + দ্বিতীয়_সংখ্যা

print("যোগফল:", যোগফল)
```

ইয়াত `input()`-এ text (string) ঘূৰাই দিয়ে। সেয়ে পূৰ্ণসংখ্যাৰ গণনাৰ বাবে `int()`-ৰে ৰূপান্তৰ কৰা হৈছে। ব্যৱহাৰকাৰীয়ে সংখ্যা নিলিখিলে `ValueError` হ'ব পাৰে; বাস্তৱ program-ত ভুল ইনপুটৰ ব্যৱস্থাও কৰিব লাগে।

## ৩.২ Python-ৰ Standard Streams

Python-এ সাধাৰণতে তিনিটা standard stream প্ৰদান কৰে। এইবোৰ `sys` module-ৰ জৰিয়তে পোৱা যায়।

| Stream | কাম | সাধাৰণ ব্যৱহাৰ |
|---|---|---|
| `sys.stdin` | Input পঢ়া | Keyboard বা redirected input |
| `sys.stdout` | সাধাৰণ output লিখা | Screen-ত ফলাফল দেখুওৱা |
| `sys.stderr` | Error/diagnostic message লিখা | ত্ৰুটিৰ বাৰ্তা দেখুওৱা |

```python
import sys

নাম = sys.stdin.readline().strip()

sys.stdout.write(f"নমস্কাৰ, {নাম}!\\n")
sys.stderr.write("এইটো এটা উদাহৰণমূলক diagnostic message.\\n")
```

**মন কৰিব:** `stdin` সদায় keyboard-ৰ পৰা আহিবই লাগিব বুলি নহয়। File redirection বা আন program-ৰ output-ও input হিচাপে আহিব পাৰে। একেদৰে `stdout` screen-ৰ সলনি file বা আন program-লৈ redirect কৰিব পাৰি।

## ৩.৩ Python-ত Input পঢ়াৰ পদ্ধতি

### পদ্ধতি ১: input()

`input()`-এ এটা line পঢ়ে আৰু শেষৰ newline আঁতৰাই string ঘূৰাই দিয়ে।

```python
নাম = input("আপোনাৰ নাম লিখক: ")
বয়স = int(input("আপোনাৰ বয়স লিখক: "))

print(f"নমস্কাৰ {নাম}! আপোনাৰ বয়স {বয়স} বছৰ।")
```

### পদ্ধতি ২: এটা line-ৰ পৰা একাধিক সংখ্যা

```python
# ইনপুট উদাহৰণ: 10 20 30
সংখ্যাসমূহ = list(map(int, input().split()))

print("সংখ্যাৰ যোগফল:", sum(সংখ্যাসমূহ))
```

- `split()`-এ whitespace অনুসৰি line-টো ভাগ কৰে।
- `map(int, ...)`-এ প্ৰতিটো অংশক integer-লৈ ৰূপান্তৰ কৰে।
- `list()`-এ ফলাফলক list-ত ৰাখে।

যদি input-ত সংখ্যা নাথাকে বা ভুল format থাকে, `ValueError` হ'ব পাৰে।

### পদ্ধতি ৩: sys.stdin.readline()

বহু line বা প্ৰতিযোগিতামূলক প্ৰগ্ৰামিংৰ input পঢ়োঁতে `sys.stdin.readline()` ব্যৱহাৰ কৰিব পাৰি।

```python
import sys

প্ৰথম_লাইন = sys.stdin.readline().strip()
দ্বিতীয়_লাইন = sys.stdin.readline().strip()

print("প্ৰথম:", প্ৰথম_লাইন)
print("দ্বিতীয়:", দ্বিতীয়_লাইন)
```

এই উদাহৰণত দুটা line পঢ়া হৈছে। `readline()`-এ সাধাৰণতে line-ৰ শেষত থকা newline-সহ string ঘূৰাই দিয়ে; `strip()`-এ দুয়োফালৰ whitespace আঁতৰায়। যদি কেৱল newline আঁতৰাব লাগে, `rstrip("\\n")` ব্যৱহাৰ কৰিব পাৰি।

**গুৰুত্বপূৰ্ণ:** একেটা input stream-ৰ পৰা `input()` আৰু `sys.stdin.readline()` মিহলাই ব্যৱহাৰ কৰিলে কোনটো function-এ কোন line পঢ়িলে সেয়া সহজে বিভ্ৰান্তিকৰ হ'ব পাৰে। এটা program-ত সাধাৰণতে এটা পদ্ধতি অনুসৰণ কৰক।

## ৩.৪ Output লিখা আৰু Formatting

`print()` সাধাৰণ output-ৰ বাবে সহজ পদ্ধতি।

```python
নাম = "ৰিমা"
নম্বৰ = 85

print("নাম:", নাম)
print(f"{নাম}-ৰ নম্বৰ {নম্বৰ}")
print("A", "B", "C", sep=" | ")
print("একে লাইনত", end=" ")
print("পৰৱৰ্তী শব্দ")
```

`sys.stdout.write()`-এ string লিখে, কিন্তু `print()`-ৰ দৰে নিজে newline যোগ নকৰে।

```python
import sys

sys.stdout.write("প্ৰথম line\\n")
sys.stdout.write("দ্বিতীয় line\\n")
```

## ৩.৫ Buffer (বাফাৰ) কি?

**Buffer** হৈছে ডেটা সাময়িকভাৱে জমা ৰখা মেম’ৰি অঞ্চল। ডেটা সৰু সৰু অংশত বাৰে বাৰে পঠিওৱাৰ সলনি কিছু ডেটা একেলগে স্থানান্তৰ কৰিলে বহু পৰিস্থিতিত কাম অধিক কাৰ্যকৰী হ'ব পাৰে।

উদাহৰণস্বৰূপে, program-এ প্ৰতিটো সৰু output-ৰ পিছতেই physical device-লৈ লিখাৰ সলনি output buffer-ত জমা ৰাখিব পাৰে। Buffer কেতিয়া খালী হ'ব সেয়া stream-ৰ ধৰণ, operating system, runtime আৰু program-ৰ আচৰণৰ ওপৰত নিৰ্ভৰ কৰে।

### Buffering-ৰ সাধাৰণ ধৰণ

- **Full buffering:** buffer পূৰ্ণ হ'লে বা stream বন্ধ হ'লে সাধাৰণতে ডেটা পঠিওৱা হয়।
- **Line buffering:** newline পালে বা stream-ৰ নিয়ম অনুসৰি buffer flush হ'ব পাৰে।
- **Unbuffered:** মধ্যৱৰ্তী user-space buffer নোহোৱাকৈ অধিক সোনকালে ডেটা পঠিওৱা হয়; তথাপি operating system-ৰ নিজা buffering থাকিব পাৰে।

এইবোৰ সাধাৰণ ধাৰণা; সকলো device আৰু Python stream-ত একে আচৰণ হ'ব বুলি ধৰা উচিত নহয়।

## ৩.৬ flush() কিয় ব্যৱহাৰ কৰা হয়?

`flush()`-এ stream-ৰ user-space output buffer-ত জমা থকা ডেটা underlying stream-লৈ পঠিয়াবলৈ অনুৰোধ কৰে।

```python
import sys

sys.stdout.write("প্ৰক্ৰিয়াটো চলি আছে...")
sys.stdout.flush()

# ইয়াৰ পিছত program-ৰ পৰৱৰ্তী কাম চলিব
```

`flush()`-এ buffer-ৰ ডেটা মচি নেপেলায়; ই ডেটা আগবঢ়ায়। ইয়াৰ অৰ্থ এইটোও নহয় যে ডেটা disk-ত স্থায়ীভাৱে লিখা সম্পূৰ্ণ হৈছে। Disk-ত durable write নিশ্চিত কৰিবলৈ file আৰু operating system-ৰ পৃথক নিয়ম আছে।

সাধাৰণ `print()`-ত `flush=True` দিব পাৰি:

```python
print("অপেক্ষা কৰক...", flush=True)
```

প্ৰতিটো output-ৰ পিছত flush কৰিলে কিছুমান ক্ষেত্ৰত performance কমিব পাৰে। প্ৰয়োজন অনুসৰি ব্যৱহাৰ কৰক।

## ৩.৭ File Stream: ফাইল পঢ়া

ফাইলক stream হিচাপে পঢ়িলে সকলো content একেলগে memory-ত ল'ব নালাগে। ডাঙৰ text file-ৰ ক্ষেত্ৰত line by line পঢ়া সুবিধাজনক।

```python
ফাইলৰ_নাম = "উদাহৰণ.txt"

with open(ফাইলৰ_নাম, "r", encoding="utf-8") as ফাইল:
    for লাইন_নং, লাইন in enumerate(ফাইল, start=1):
        print(f"{লাইন_নং}: {লাইন.rstrip()}")
```

- `open()`-এ ফাইল খোলে।
- `"r"`-ৰ অৰ্থ read mode।
- `encoding="utf-8"`-এ text decoding-ৰ encoding স্পষ্ট কৰে।
- `with` block শেষ হ'লে ফাইলটো স্বয়ংক্ৰিয়ভাৱে বন্ধ হয়।
- `enumerate()`-এ line number আৰু line দুয়ো দিয়ে।

UTF-8 সাধাৰণতে বহু ভাষাৰ text-ৰ বাবে উপযোগী। কিন্তু ফাইলটো অন্য encoding-ত থাকিলে সঠিক encoding নিৰ্বাচন কৰিব লাগিব।

## ৩.৮ File Stream: ফাইল লিখা

```python
বিষয়বস্তু = "এইটো প্ৰথম line.\\nএইটো দ্বিতীয় line.\\n"

with open("ফলাফল.txt", "w", encoding="utf-8") as ফাইল:
    ফাইল.write(বিষয়বস্তু)
```

সাধাৰণ mode:

| Mode | অৰ্থ |
|---|---|
| `"r"` | পঢ়া; ফাইল নাথাকিলে error |
| `"w"` | লিখা; আগৰ content মচি নতুনকৈ লিখে |
| `"a"` | শেষত নতুন content যোগ কৰে |
| `"x"` | নতুন ফাইল সৃষ্টি; আগতেই থাকিলে error |
| `"rb"` / `"wb"` | Binary mode-ত পঢ়া / লিখা |

**সাৱধান:** `"w"` mode-এ আগৰ ফাইলৰ content মচি পেলায়। গুৰুত্বপূৰ্ণ ফাইলত ব্যৱহাৰ কৰাৰ আগতে নিশ্চিত হওক।

## ৩.৯ Buffering parameter আৰু File Reading

Python-ৰ `open()`-ত `buffering` parameter ব্যৱহাৰ কৰিব পাৰি। উদাহৰণ:

```python
with open(
    "ডাঙৰ_ফাইল.txt",
    "r",
    encoding="utf-8",
    buffering=8192
) as ফাইল:
    for লাইন in ফাইল:
        if "গুৰুত্বপূৰ্ণ" in লাইন:
            print(লাইন.rstrip())
```

ইয়াত `8192` হৈছে buffering-ৰ আকাৰৰ parameter (সাধাৰণ byte-ভিত্তিক buffer size)। কিন্তু ইয়াৰ অৰ্থ এইটো নহয় যে program-এ প্ৰতিবাৰ ঠিক 8192 byte-হে পঢ়িব বা সকলো computer-ত একে performance পাব। Text stream-ত decoding আৰু আন buffer-ৰ স্তৰো থাকিব পাৰে।

ফাইল line by line পঢ়িলে সাধাৰণতে সম্পূৰ্ণ ফাইলটো একেলগে memory-ত লোৱাৰ প্ৰয়োজন নাথাকে। তথাপি line-ৰ আকাৰ অতি ডাঙৰ হ'লে সেই line-টোৱে memory ল'ব পাৰে।

## ৩.১০ Error Handling: ফাইল আৰু Input-ৰ ত্ৰুটি

ফাইল নাথাকিলে, permission নাথাকিলে বা input ভুল হ'লে program-এ error দিব পাৰে। `try` আৰু `except` ব্যৱহাৰ কৰি তেনে অৱস্থা নিয়ন্ত্ৰণ কৰিব পাৰি।

```python
try:
    with open("তথ্য.txt", "r", encoding="utf-8") as ফাইল:
        বিষয়বস্তু = ফাইল.read()
        print(বিষয়বস্তু)

except FileNotFoundError:
    print("ফাইলটো পোৱা নগ'ল।")

except PermissionError:
    print("ফাইল পঢ়াৰ অনুমতি নাই।")

except UnicodeDecodeError:
    print("ফাইলৰ encoding পঢ়িব পৰা নগ'ল।")
```

সকলো error-ৰ বাবে একেটা message দেখুওৱাতকৈ সম্ভৱ হ'লে নিৰ্দিষ্ট error চিনাক্ত কৰক। তেতিয়া সমস্যা সমাধান সহজ হয়।

## ৩.১১ অনুশীলনী

1. Input–Process–Output cycle-ৰ তিনিটা অংশৰ অৰ্থ লিখক।
2. `sys.stdin`, `sys.stdout` আৰু `sys.stderr`-ৰ কাম কি?
3. `input()`-এ সাধাৰণতে কোন ধৰণৰ value ঘূৰাই দিয়ে?
4. `split()` আৰু `map(int, ...)`-ৰ কাম বুজাওক।
5. `print()` আৰু `sys.stdout.write()`-ৰ এটা পাৰ্থক্য লিখক।
6. Buffer কিয় ব্যৱহাৰ কৰা হয়?
7. `flush()`-এ buffer-ৰ ডেটাৰ সৈতে কি কৰে?
8. `open("file.txt", "w")` ব্যৱহাৰ কৰিলে কি সাৱধানতা ল'ব লাগে?
9. ডাঙৰ text file line by line পঢ়াৰ এটা সুবিধা লিখক।
10. `FileNotFoundError` কেতিয়া হ'ব পাৰে?

### অনুশীলনীৰ উত্তৰ

1. Input-এ তথ্য গ্ৰহণ কৰে, Processing-এ তথ্যৰ ওপৰত কাম কৰে, Output-এ ফলাফল দিয়ে।
2. `stdin` input পঢ়ে, `stdout` সাধাৰণ output লিখে, `stderr` error বা diagnostic output লিখে।
3. String।
4. `split()`-এ string ভাগ কৰে; `map(int, ...)`-এ প্ৰতিটো অংশ integer-লৈ ৰূপান্তৰ কৰে।
5. `print()`-এ default-ভাৱে শেষত newline দিয়ে; `sys.stdout.write()`-এ নিজে newline যোগ নকৰে।
6. ডেটা সাময়িকভাৱে জমা কৰি স্থানান্তৰ অধিক কাৰ্যকৰী কৰিবলৈ।
7. User-space output buffer-ৰ ডেটা underlying stream-লৈ পঠিয়ায়; ডেটা মচি নেপেলায়।
8. `"w"` mode-এ আগৰ content মচি পেলাব পাৰে।
9. সম্পূৰ্ণ ফাইল একেলগে memory-ত ল'ব নালাগে।
10. নিৰ্দিষ্ট path-ত ফাইল নাথাকিলে।

## ৩.১২ অধিক পঢ়াৰ উৎস

- Python Official Tutorial — Input and Output: https://docs.python.org/3/tutorial/inputoutput.html
- Python `sys` module: https://docs.python.org/3/library/sys.html
- Python `open()` documentation: https://docs.python.org/3/library/functions.html#open
- Python `io` module: https://docs.python.org/3/library/io.html

## অধ্যায়ৰ সাৰাংশ

Input–Process–Output cycle-এ program-ৰ মৌলিক কাম বুজায়। Python-ৰ `stdin`, `stdout` আৰু `stderr`-এ standard input আৰু output নিয়ন্ত্ৰণ কৰে। Buffer-এ ডেটা সাময়িকভাৱে জমা ৰাখে; `flush()`-এ output buffer-ৰ ডেটা আগবঢ়ায়, মচি নেপেলায়। File stream-ৰ সহায়ত text line by line পঢ়িব বা লিখিব পাৰি। `with`, সঠিক encoding আৰু নিৰ্দিষ্ট error handling ব্যৱহাৰ কৰিলে file operation অধিক নিৰাপদ আৰু বুজিবলৈ সহজ হয়।`,
    },
    {
      id: 'ch-4',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৪: মেম’ৰি মডেল, টাইপ চিষ্টেম আৰু চলকৰ সত্যতা',
      subtitle: 'Python Objects, Names, Mutable vs Immutable, Copying আৰু Truthiness',
      estimatedReadTime: '30–40 min',
      topics: ['Object Identity and Type', 'Names and References', 'Dynamic Typing', 'Mutable and Immutable Objects', 'Shallow and Deep Copy', 'Equality vs Identity', 'Truthy and Falsy'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি Python object-ৰ identity, type আৰু value বুজাব পাৰিব; variable name আৰু reference-ৰ সম্পৰ্ক বুজিব পাৰিব; mutable/immutable, shallow/deep copy আৰু truthiness সঠিকভাৱে ব্যৱহাৰ কৰিব পাৰিব।

## ৪.১ Python Object Model

Python-ত integer, string, list, dictionary, function আদি সকলো object। প্ৰতিটো object-ৰ তিনিটা গুৰুত্বপূৰ্ণ বৈশিষ্ট্য থাকে:

- **Identity (পৰিচয়):** object-টোক আন object-ৰ পৰা পৃথককৈ চিনাক্ত কৰে।
- **Type (ধৰণ):** object-টোৰ ধৰণ; যেনে `int`, `str`, `list`।
- **Value (মান):** object-টোৱে প্ৰতিনিধিত্ব কৰা তথ্য।

```python
সংখ্যা = 256
print(type(সংখ্যা))  # <class 'int'>
print(id(সংখ্যা))    # identity-ৰ বাবে integer identifier
```

**সাৱধান:** `id()`-এ সদায় physical memory address দিয়ে বুলি ক'ব নোৱাৰি। Python-ৰ নিয়ম অনুসৰি ই object-ৰ identity-ৰ বাবে এটা integer ঘূৰাই দিয়ে। CPython-ত এই মান বহু ক্ষেত্ৰত memory address-ৰ সৈতে জড়িত হ'ব পাৰে, কিন্তু program-এ ইয়াক স্থায়ী memory address বুলি ধৰি ল'ব নালাগে। Object জীৱিত থকা সময়ত ইয়াৰ identity স্থিৰ থাকে।

## ৪.২ Variable Name আৰু Object Reference

Python-ত variable name-এ object-ৰ সৈতে bind হৈ থাকে। Assignment-এ সদায় নতুন object সৃষ্টি নকৰে।

```python
প্ৰথম = [10, 20, 30]
দ্বিতীয় = প্ৰথম
দ্বিতীয়.append(40)

print(প্ৰথম)   # [10, 20, 30, 40]
print(দ্বিতীয়) # [10, 20, 30, 40]
```

ইয়াত দুয়োটা নাম একেটা list object-লৈ reference কৰিছে। সেয়ে এটা নামৰ জৰিয়তে list সলনি কৰিলে আন নামৰ জৰিয়তেও সেই পৰিৱৰ্তন দেখা যায়।

### Equality (`==`) আৰু Identity (`is`)

- `==`-এ দুটা object-ৰ value সমান নে নহয় পৰীক্ষা কৰে।
- `is`-এ দুয়োটা reference একেটা object-লৈ গৈছে নে নাই পৰীক্ষা কৰে।

```python
ক = [1, 2, 3]
খ = [1, 2, 3]
গ = ক

print(ক == খ)  # True: value একে
print(ক is খ)  # False: পৃথক object
print(ক is গ)  # True: একেটা object
```

Value তুলনাৰ বাবে সাধাৰণতে `==` ব্যৱহাৰ কৰক। `is`-ৰ সঠিক আৰু প্ৰচলিত ব্যৱহাৰ হ'ল `None` পৰীক্ষা কৰা:

```python
ফলাফল = None
if ফলাফল is None:
    print("এতিয়াও কোনো ফলাফল নাই")
```

## ৪.৩ Dynamic Typing আৰু Type Annotation

Python dynamically typed language। Variable name-ৰ বাবে আগতীয়াকৈ স্থায়ী type ঘোষণা কৰাটো বাধ্যতামূলক নহয়।

```python
মান = 25
print(type(মান))  # <class 'int'>

মান = "পঁচিশ"
print(type(মান))  # <class 'str'>
```

Type পৰীক্ষাৰ বাবে `type()` আৰু `isinstance()` ব্যৱহাৰ কৰিব পাৰি।

```python
মান = 42
print(type(মান))
print(isinstance(মান, int))  # True
```

`isinstance()`-এ inheritance-ও বিবেচনা কৰে; সেয়ে বহু ক্ষেত্ৰত ই `type(x) == T`-তকৈ অধিক উপযোগী।

Type annotation-এ code পঢ়িবলৈ আৰু static analysis-ত সহায় কৰে। কিন্তু সাধাৰণ Python execution-ত annotation-এ নিজে নিজে value-ৰ type বাধ্যতামূলকভাৱে নিয়ন্ত্ৰণ নকৰে।

```python
বয়স: int = 20
বয়স = "বিশ"  # সাধাৰণ execution-ত Python-এ নিজে block নকৰে
print(বয়স)
```

## ৪.৪ Mutable আৰু Immutable Objects

**Mutable object**-ৰ content সৃষ্টি হোৱাৰ পিছতো সলনি কৰিব পাৰি। **Immutable object**-ৰ value সৃষ্টি হোৱাৰ পিছত সলনি কৰিব নোৱাৰি।

| ধৰণ | উদাহৰণ | আচৰণ |
|---|---|---|
| Immutable | `int`, `float`, `bool`, `str`, `bytes`, `frozenset` | নিজৰ value in-place সলনি কৰিব নোৱাৰি |
| Mutable | `list`, `dict`, `set`, `bytearray` | content সলনি কৰিব পাৰি |

`tuple` হৈছে immutable container; কিন্তু ইয়াৰ ভিতৰত mutable object থাকিলে সেই object-ৰ content সলনি হ'ব পাৰে।

```python
তথ্য = (["অসম"], 2026)
তথ্য[0].append("ভাষা")
print(তথ্য)  # (['অসম', 'ভাষা'], 2026)

# তথ্য[0] = ["নতুন"]  # TypeError: tuple-ৰ element replace কৰিব নোৱাৰি
```

### Immutable object-ৰ উদাহৰণ

```python
শব্দ = "অসম"
শব্দ = শব্দ + "ীয়া"
print(শব্দ)
```

String immutable। Concatenation-এ পুৰণি string-ৰ content সলনি নকৰে; নতুন string value সৃষ্টি কৰি নামটো নতুন object-ৰ সৈতে bind কৰে।

### Mutable object-ৰ উদাহৰণ

```python
সংখ্যা = [1, 2, 3]
সংখ্যা.append(4)
print(সংখ্যা)  # [1, 2, 3, 4]
```

List-টো একেই object হৈ থাকে; ইয়াৰ content সলনি হয়।

## ৪.৫ Shallow Copy আৰু Deep Copy

Nested list বা dictionary copy কৰোঁতে copy-ৰ গভীৰতা বুজাটো প্ৰয়োজন।

### Shallow Copy

Shallow copy-এ বাহিৰৰ container-টোৰ নতুন object সৃষ্টি কৰে, কিন্তু ভিতৰৰ nested object-সমূহৰ reference ভাগ কৰে।

```python
import copy

মূল = [[1, 2], [3, 4]]
নকল = copy.copy(মূল)

মূল[0][0] = 99
print(মূল)   # [[99, 2], [3, 4]]
print(নকল)   # [[99, 2], [3, 4]]
```

ভিতৰৰ list-টো একে object হোৱা বাবে দুয়ো ঠাইতে পৰিৱৰ্তন দেখা গৈছে।

### Deep Copy

Deep copy-এ nested object-সমূহো পুনৰ copy কৰাৰ চেষ্টা কৰে।

```python
import copy

মূল = [[1, 2], [3, 4]]
স্বতন্ত্ৰ_নকল = copy.deepcopy(মূল)

মূল[1][1] = 88
print(মূল)             # [[1, 2], [88, 4]]
print(স্বতন্ত্ৰ_নকল)   # [[1, 2], [3, 4]]
```

Deep copy-ও সকলো object-ৰ ক্ষেত্ৰত একে ধৰণে কাম কৰিব বুলি ধৰা উচিত নহয়। কিছুমান object copy কৰিব নোৱাৰি বা বিশেষ আচৰণ দেখুৱায়; custom class-এ copy-ৰ নিয়ম সলনি কৰিব পাৰে।

| পদ্ধতি | বাহিৰৰ object নতুন? | Nested reference ভাগ হয়? |
|---|---|---|
| `খ = ক` | নহয় | হয়, একেটা object |
| `copy.copy(ক)` | হয় | হয় |
| `copy.deepcopy(ক)` | হয় | সাধাৰণতে নহয়; recursive copy কৰে |

## ৪.৬ Truthiness: True আৰু False হিচাপে মূল্যায়ন

Python-ত কিছুমান value condition-ত `False` আৰু আন কিছুমান `True` হিচাপে আচৰণ কৰে। ইয়াক truthiness বোলা হয়।

সাধাৰণ falsy value:

- `False`, `None`
- সংখ্যাগত শূন্য: `0`, `0.0`, `0j`
- খালী string: `""`
- খালী container: `[]`, `()`, `{}`, `set()`, `range(0)`

সাধাৰণতে non-zero সংখ্যা আৰু non-empty container truthy হয়। Custom class-এ `__bool__()` বা `__len__()`-ৰ জৰিয়তে নিজৰ truthiness নিৰ্ধাৰণ কৰিব পাৰে।

```python
def সত্যতা_পৰীক্ষা(মান):
    if মান:
        return "Truthy"
    return "Falsy"

print(সত্যতা_পৰীক্ষা([]))       # Falsy
print(সত্যতা_পৰীক্ষা([0]))      # Truthy
print(সত্যতা_পৰীক্ষা(""))       # Falsy
print(সত্যতা_পৰীক্ষা("অসম"))    # Truthy
print(সত্যতা_পৰীক্ষা(0))        # Falsy
print(সত্যতা_পৰীক্ষা(None))     # Falsy
```

`[0]`-ত শূন্য সংখ্যা আছে, কিন্তু list-খন খালী নহয়। সেয়ে list-খন truthy।

## ৪.৭ সাধাৰণ ভুল আৰু সাৱধানতা

1. **`is`-ৰে সংখ্যা বা string তুলনা কৰা:** value তুলনাৰ বাবে সাধাৰণতে `==` ব্যৱহাৰ কৰক।
2. **Integer caching-ৰ ওপৰত নিৰ্ভৰ কৰা:** কিছুমান Python implementation-এ কিছুমান integer পুনৰ ব্যৱহাৰ কৰিব পাৰে। ইয়াক language guarantee বুলি নধৰিব।
3. **Assignment-ক copy বুলি ভবা:** `খ = ক`-এ নতুন list সৃষ্টি নকৰে।
4. **Shallow copy-ক সম্পূৰ্ণ স্বাধীন copy বুলি ভবা:** nested mutable object ভাগ হৈ থাকিব পাৰে।
5. **Type annotation-ক runtime validation বুলি ভবা:** annotation-এ নিজে type বাধ্যতামূলক নকৰে।
6. **সকলো tuple সম্পূৰ্ণৰূপে immutable বুলি ভবা:** ভিতৰৰ mutable object-ৰ content সলনি হ'ব পাৰে।

## ৪.৮ অনুশীলনী

1. Python object-ৰ Identity, Type আৰু Value বুজাওক।
2. `id()`-এ সদায় physical memory address দিয়ে নেকি?
3. `ক = [1, 2]` আৰু `খ = ক` হ'লে `খ.append(3)`-ৰ পিছত `ক`-ৰ মান কি?
4. `==` আৰু `is`-ৰ পাৰ্থক্য লিখক।
5. Dynamic typing বুলিলে কি বুজায়?
6. Type annotation-এ সাধাৰণ execution-ত ভুল type assignment বাধা দিয়ে নেকি?
7. Mutable আৰু immutable object-ৰ দুটাকৈ উদাহৰণ দিয়ক।
8. Shallow copy-ত nested list সলনি কৰিলে মূল আৰু নকল দুয়োটাত কিয় প্ৰভাৱ পৰে?
9. `copy.deepcopy()` কেতিয়া উপযোগী?
10. `[]`, `[0]`, `0` আৰু `"অসম"`-ৰ ভিতৰত কোনবোৰ truthy?
11. `None` পৰীক্ষা কৰিবলৈ `is None` কিয় ব্যৱহাৰ কৰা হয়?
12. Tuple-ৰ ভিতৰৰ list-ত `append()` চলাব পাৰি নে? কাৰণ লিখক।

### অনুশীলনীৰ উত্তৰ

1. Identity-এ object চিনাক্ত কৰে, Type-এ ধৰণ জনায়, Value-এ তথ্য জনায়।
2. নহয়। ই identity-ৰ integer identifier দিয়ে; সদায় physical address নহয়।
3. `[1, 2, 3]`; দুয়োটা নাম একে list object-লৈ reference কৰিছে।
4. `==` value তুলনা কৰে; `is` একে object নে পৰীক্ষা কৰে।
5. Variable name-এ program চলি থাকোঁতে বিভিন্ন type-ৰ object-ৰ সৈতে bind হ'ব পাৰে।
6. নহয়। Annotation মূলত documentation আৰু static analysis-ত সহায় কৰে।
7. Mutable: list, dict। Immutable: int, str।
8. Shallow copy-এ nested object-ৰ reference ভাগ কৰে।
9. Nested mutable data-ৰ অধিক স্বাধীন copy প্ৰয়োজন হ'লে।
10. `[0]` আৰু `"অসম"` truthy; `[]` আৰু `0` falsy।
11. `None` singleton object; `is None` identity সঠিকভাৱে পৰীক্ষা কৰে।
12. হয়। ভিতৰৰ list mutable; কিন্তু tuple-ৰ element-টো replace কৰিব নোৱাৰি।

## ৪.৯ অধিক পঢ়াৰ উৎস

- Python Data Model: https://docs.python.org/3/reference/datamodel.html
- Built-in Functions (`id`, `type`, `isinstance`): https://docs.python.org/3/library/functions.html
- `copy` module: https://docs.python.org/3/library/copy.html
- Truth Value Testing: https://docs.python.org/3/library/stdtypes.html#truth-value-testing

## অধ্যায়ৰ সাৰাংশ

Python-ত variable name-এ object-ৰ সৈতে bind হয়। Object-ৰ identity, type আৰু value থাকে। `==`-এ value তুলনা কৰে, আনহাতে `is`-এ identity তুলনা কৰে। Mutable object-ৰ content সলনি কৰিব পাৰি; immutable object-ৰ value সলনি কৰিব নোৱাৰি। Assignment-এ নতুন copy সৃষ্টি নকৰে। Shallow copy-এ nested reference ভাগ কৰে, কিন্তু deep copy-এ nested object-সমূহো copy কৰাৰ চেষ্টা কৰে। Condition-ত value-ৰ truthiness ব্যৱহাৰ হয়; খালী container আৰু শূন্য সাধাৰণতে falsy, কিন্তু non-empty container truthy।`,
    },
    {
      id: 'ch-5',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৫: আধুনিক নিয়ন্ত্ৰণ প্ৰৱাহ আৰু পেটাৰ্ণ মেচিং',
      subtitle: 'Structural Pattern Matching (Python 3.10+), Enumerate, Zip আৰু Itertools',
      estimatedReadTime: '25–35 min',
      topics: ['Structural Pattern Matching', 'Sequence and Mapping Patterns', 'OR Patterns and Guards', 'Enumerate', 'Zip and Strict Zip', 'Itertools'],
      content: `## এই অধ্যায়ৰ শিক্ষণ-লক্ষ্য

এই অধ্যায় শেষ কৰিলে আপুনি:
- Python 3.10-ৰ `match-case` syntax বুজিব পাৰিব।
- Sequence pattern, mapping pattern আৰু OR pattern চিনিব পাৰিব।
- Pattern guard-ৰ সহায়ত অতিৰিক্ত চৰ্ত পৰীক্ষা কৰিব পাৰিব।
- `enumerate()` আৰু `zip()`-ৰে loop অধিক স্পষ্ট কৰিব পাৰিব।
- `itertools`-ৰ কেইটামান উপযোগী function ব্যৱহাৰ কৰিব পাৰিব।
- Pattern matching-ৰ সীমা আৰু সাধাৰণ ভুল বুজিব পাৰিব।

## ৫.১ Structural Pattern Matching কি?

Python 3.10-ৰ পৰা `match` আৰু `case` ব্যৱহাৰ কৰি এটা value-ৰ গঠন অনুসৰি বিভিন্ন code চলাব পাৰি। ইয়াক Structural Pattern Matching বোলা হয়।

ই কেৱল C বা Java-ৰ সাধাৰণ switch statement-ৰ দৰে নহয়। ইয়াত sequence, mapping আৰু class-ৰ গঠনো pattern হিচাপে পৰীক্ষা কৰিব পাৰি।

```python
দিন = 3

match দিন:
    case 1:
        নাম = "সোমবাৰ"
    case 2:
        নাম = "মঙলবাৰ"
    case 3:
        নাম = "বুধবাৰ"
    case _:
        নাম = "অন্য দিন"

print(নাম)
```

`case _` হৈছে wildcard pattern। ই যিকোনো value-ৰ সৈতে match কৰে আৰু value-টো কোনো variable-ত bind নকৰে। সাধাৰণতে ইয়াক শেষৰ default case হিচাপে ৰখা হয়।

## ৫.২ Mapping Pattern: Dictionary অনুসৰি Match

Mapping pattern-এ dictionary-ৰ নিৰ্দিষ্ট key আৰু value পৰীক্ষা কৰিব পাৰে।

```python
def আদেশ_প্ৰচেছ_কৰা(কমাণ্ড):
    match কমাণ্ড:
        case {
            "action": "move",
            "direction": ("north" | "south" | "east" | "west") as দিশ,
            "steps": int() as খোজ
        } if type(খোজ) is int and খোজ > 0:
            return f"ৰব'ট {খোজ} খোজ {দিশ} দিশত আগবাঢ়িব।"

        case {
            "action": "sleep",
            "duration": int() as ছেকেণ্ড
        } if type(ছেকেণ্ড) is int and ছেকেণ্ড >= 0:
            return f"ৰব'ট {ছেকেণ্ড} ছেকেণ্ড জিৰণি ল'ব।"

        case {
            "action": "message",
            "text": str() as বাৰ্তা
        }:
            return f"বাৰ্তা: {বাৰ্তা}"

        case _:
            return "অজ্ঞাত বা ভুল format-ৰ আদেশ।"


print(আদেশ_প্ৰচেছ_কৰা({
    "action": "move",
    "direction": "north",
    "steps": 5
}))
print(আদেশ_প্ৰচেছ_কৰা({
    "action": "sleep",
    "duration": 10
}))
print(আদেশ_প্ৰচেছ_কৰা({"action": "dance"}))
```

ইয়াত:
- `"action": "move"`-এ key-ৰ value পৰীক্ষা কৰে।
- `("north" | "south" | "east" | "west")` হৈছে OR pattern; চাৰিটাৰ যিকোনো এটা value match কৰিব।
- `as দিশ`-এ matched value-টো `দিশ` নামত bind কৰে।
- `int() as খোজ`-এ integer instance-ৰ pattern পৰীক্ষা কৰি value bind কৰে।
- `if`-ৰ পিছৰ অংশটো pattern guard। ই অতিৰিক্ত চৰ্ত পৰীক্ষা কৰে।

**বিশেষ সাৱধানতা:** Python-ত `bool` হৈছে `int`-ৰ subclass। সেয়ে কেৱল `int()` pattern-এ `True` আৰু `False`-কো integer হিচাপে match কৰিব পাৰে। উদাহৰণত `type(খোজ) is int` ব্যৱহাৰ কৰি boolean-ৰ দৰে value বাদ দিয়া হৈছে।

Mapping pattern-এ dictionary-ত উল্লেখ কৰা key-সমূহ থাকিলেই match কৰিব পাৰে; অতিৰিক্ত key থাকিলেও সাধাৰণতে সমস্যা নহয়। সকলো key-হে থাকিব লাগিব বুলি ধৰা উচিত নহয়।

## ৫.৩ Sequence Pattern আৰু Unpacking

Sequence pattern-এ list বা tuple-ৰ দৰে sequence-ৰ গঠন পৰীক্ষা কৰিব পাৰে।

```python
বিন্দু = (10, 20)

match বিন্দু:
    case (0, 0):
        print("মূলবিন্দু")
    case (x, 0):
        print(f"X অক্ষত অৱস্থান: {x}")
    case (0, y):
        print(f"Y অক্ষত অৱস্থান: {y}")
    case (x, y):
        print(f"বিন্দুৰ অৱস্থান: ({x}, {y})")
```

### Star Pattern

```python
সংখ্যাসমূহ = [10, 20, 30, 40]

match সংখ্যাসমূহ:
    case [প্ৰথম, দ্বিতীয়, *বাকী]:
        print("প্ৰথম দুটা:", প্ৰথম, দ্বিতীয়)
        print("বাকী:", বাকী)
    case _:
        print("অন্তত দুটা element নাই")
```

`*বাকী`-এ বাকী element-সমূহক এখন list হিচাপে bind কৰে। এই pattern-এ অন্তত দুটা element থকা sequence-ৰ সৈতে match কৰে।

## ৫.৪ Pattern Matching-ত Capture আৰু Literal-ৰ পাৰ্থক্য

এটা সাধাৰণ ভুল হ'ল `case নাম:` লিখি `নাম`-ক আগতে নিৰ্ধাৰিত variable-ৰ value বুলি ভবা। Python-ত bare name pattern সাধাৰণতে capture pattern; ই যিকোনো matched value-টো সেই নামত bind কৰে।

```python
কোড = 404

match কোড:
    case 200:
        print("সফল")
    case 404:
        print("পৃষ্ঠা পোৱা নগ'ল")
    case _:
        print("অন্য ফলাফল")
```

নিৰ্দিষ্ট integer বা string value match কৰিবলৈ literal pattern ব্যৱহাৰ কৰক। Constant-ৰ ক্ষেত্ৰত dotted name ব্যৱহাৰ কৰিব পাৰি, যেনে `HTTP.OK`। Bare variable name-ক constant pattern বুলি ধৰি নল'ব।

## ৫.৫ Guard ব্যৱহাৰ

Pattern match হোৱাৰ পিছত অতিৰিক্ত চৰ্ত পৰীক্ষা কৰিবলৈ `if` guard ব্যৱহাৰ কৰা হয়।

```python
সংখ্যা = 18

match সংখ্যা:
    case int() as n if n < 0:
        print("ঋণাত্মক")
    case int() as n if n == 0:
        print("শূন্য")
    case int() as n if n > 0:
        print("ধনাত্মক")
    case _:
        print("Integer নহয়")
```

Pattern-এ গঠন পৰীক্ষা কৰে; guard-এ matched value-ৰ ওপৰত অতিৰিক্ত logical condition পৰীক্ষা কৰে।

## ৫.৬ enumerate(): Index আৰু Value একেলগে

List বা আন iterable-ৰ প্ৰতিটো item-ৰ লগতে index পাবলৈ `enumerate()` ব্যৱহাৰ কৰা হয়।

```python
ফলসমূহ = ["আপেল", "কলা", "আঙুৰ"]

for সূচী, ফল in enumerate(ফলসমূহ, start=1):
    print(f"{সূচী}. {ফল}")
```

সম্ভাৱ্য output:

```text
1. আপেল
2. কলা
3. আঙুৰ
```

`start=1` দিলে গণনা 1-ৰ পৰা আৰম্ভ হয়। Default-ভাৱে index 0-ৰ পৰা আৰম্ভ হয়। `enumerate()`-এ iterable-ৰ item-সমূহৰ সৈতে index-ৰ জোৰা দিয়ে; ই নিজে সম্পূৰ্ণ list সৃষ্টি নকৰে।

## ৫.৭ zip(): একাধিক Iterable একেলগে চলোৱা

`zip()`-এ কেইবাটাও iterable-ৰ item-সমূহক অৱস্থান অনুসৰি জোৰা লগায়।

```python
নামসমূহ = ["ৰিকু", "জয়ন্ত", "প্ৰিয়া"]
বয়সসমূহ = [25, 30, 22]

for নাম, বয়স in zip(নামসমূহ, বয়সসমূহ):
    print(f"{নাম}: {বয়স} বছৰ")
```

সাধাৰণ `zip()`-এ আটাইতকৈ চুটি iterable শেষ হ'লে থামে। সেয়ে দৈৰ্ঘ্য বেলেগ হ'লে কিছুমান item বাদ পৰিব পাৰে।

Python 3.10+ ত `strict=True` ব্যৱহাৰ কৰি দৈৰ্ঘ্য বেলেগ হ'লে error উলিয়াব পাৰি:

```python
নামসমূহ = ["ৰিকু", "জয়ন্ত"]
বয়সসমূহ = [25, 30]

for নাম, বয়স in zip(নামসমূহ, বয়সসমূহ, strict=True):
    print(নাম, বয়স)
```

ইয়াত দুয়োটা iterable-ৰ দৈৰ্ঘ্য একে। দৈৰ্ঘ্য বেলেগ হ'লে `ValueError` হ'ব। যেতিয়া সকলো data pair মিলিব লাগিব, তেতিয়া `strict=True` উপযোগী।

## ৫.৮ itertools: Iterator-ৰ বাবে উপযোগী সঁজুলি

`itertools` Python-ৰ standard library-ৰ module। ই iterable-ৰ ওপৰত memory-দক্ষভাৱে কাম কৰাৰ function প্ৰদান কৰে। ইয়াৰ বহু function-এ iterator ঘূৰাই দিয়ে; প্ৰয়োজন হ'লেহে `list()`-ৰে সকলো ফলাফল একেলগে materialize কৰক।

### combinations(): ক্ৰম গুৰুত্ব নোপোৱা জোৰা

```python
from itertools import combinations

ফলাফল = combinations([1, 2, 3], 2)
print(list(ফলাফল))
# [(1, 2), (1, 3), (2, 3)]
```

ইয়াত একে item পুনৰ ব্যৱহাৰ নকৰাকৈ 2টা item-ৰ combination পোৱা যায়। `(1, 2)` আৰু `(2, 1)` পৃথক ফলাফল নহয়।

### permutations(): ক্ৰম গুৰুত্বপূৰ্ণ

```python
from itertools import permutations

print(list(permutations(["A", "B"], 2)))
# [('A', 'B'), ('B', 'A')]
```

Permutation-ত ক্ৰম বেলেগ হ'লে ফলাফল বেলেগ হয়।

### product(): Cartesian Product

```python
from itertools import product

ৰং = ["ৰঙা", "নীলা"]
আকাৰ = ["সৰু", "ডাঙৰ"]

for ৰ, আ in product(ৰং, আকাৰ):
    print(ৰ, আ)
```

ই সকলো সম্ভৱ জোৰা সৃষ্টি কৰে। Input set-ৰ আকাৰ বাঢ়িলে ফলাফলৰ সংখ্যাও দ্ৰুতগতিত বাঢ়িব পাৰে।

### islice(): Iterator-ৰ নিৰ্দিষ্ট অংশ

```python
from itertools import islice

সংখ্যা = range(1000000)

for n in islice(সংখ্যা, 5):
    print(n)
```

ইয়াত প্ৰথম পাঁচটা item-হে পঢ়া হৈছে। সম্পূৰ্ণ এক million item-ৰ list সৃষ্টি কৰা হোৱা নাই।

## ৫.৯ কোনটো কেতিয়া ব্যৱহাৰ কৰিব?

| সঁজুলি | উপযোগী পৰিস্থিতি |
|---|---|
| `match-case` | value-ৰ গঠন অনুসৰি বিভিন্ন পথ বাছনি |
| `enumerate()` | item-ৰ লগতে index লাগে |
| `zip()` | একাধিক iterable-ৰ item একেলগে লাগে |
| `zip(strict=True)` | সকলো iterable-ৰ দৈৰ্ঘ্য মিলিবই লাগিব |
| `combinations()` | ক্ৰম নধৰি বাছনিৰ গোট |
| `permutations()` | ক্ৰম অনুসৰি বিন্যাস |
| `product()` | সকলো সম্ভৱ জোৰা বা combination |
| `islice()` | iterator-ৰ নিৰ্দিষ্ট অংশ লোৱা |

## ৫.১০ সাধাৰণ ভুল আৰু সাৱধানতা

1. **Python version:** `match-case` আৰু `zip(strict=True)`-ৰ বাবে Python 3.10 বা তাৰ পিছৰ version লাগে।
2. **Bare name pattern:** `case x:`-এ সাধাৰণতে value-টো `x`-ত capture কৰে; আগৰ `x`-ৰ value match নকৰে।
3. **Wildcard:** `case _:` যিকোনো value match কৰে; সাধাৰণতে শেষত ৰাখক।
4. **Mapping pattern:** উল্লেখ কৰা key-সমূহ match হ'লেই অতিৰিক্ত key থাকিব পাৰে।
5. **zip truncation:** সাধাৰণ `zip()`-এ চুটি iterable শেষ হ'লে থামে।
6. **Iterator এবাৰ ব্যৱহাৰ:** বহু iterator consume কৰিলে আগৰ item পুনৰ নাপাবও পাৰে।
7. **অতি ডাঙৰ list:** `list(combinations(...))` বা `list(product(...))`-এ বিপুল memory ল'ব পাৰে।

## ৫.১১ অনুশীলনী

1. Structural Pattern Matching কোন Python version-ৰ পৰা আহিছে?
2. `case _:`-ৰ কাম কি?
3. Mapping pattern-এ dictionary-ৰ অতিৰিক্ত key থাকিলে match কৰিব পাৰেনে?
4. `case x:`-ত `x` capture pattern নে আগৰ variable-ৰ value?
5. Pattern guard কি?
6. `enumerate(["ক", "খ"], start=1)`-এ কি ধৰণৰ জোৰা দিয়ে?
7. সাধাৰণ `zip()`-এ iterable-ৰ দৈৰ্ঘ্য বেলেগ হ'লে কি কৰে?
8. `zip(strict=True)`-এ দৈৰ্ঘ্য বেলেগ হ'লে কি কৰে?
9. `combinations([1, 2, 3], 2)`-ৰ ফলাফল লিখক।
10. `permutations(["A", "B"], 2)`-ত কিমানটা ফলাফল থাকে?
11. `islice(range(100), 3)`-এ কিমানটা item দিয়ে?
12. Iterator-ৰ সকলো item একেলগে list-ত সলনি কৰিলে কি অসুবিধা হ'ব পাৰে?

### অনুশীলনীৰ উত্তৰ

1. Python 3.10।
2. যিকোনো value match কৰা wildcard/default pattern।
3. হয়; pattern-ত উল্লেখ কৰা key-সমূহ match হ'লে অতিৰিক্ত key থাকিব পাৰে।
4. Capture pattern; matched value-টো `x`-ত bind হয়।
5. Pattern match হোৱাৰ পিছত `if`-ৰে অতিৰিক্ত চৰ্ত পৰীক্ষা কৰা।
6. `(1, "ক")` আৰু `(2, "খ")`-ৰ দৰে index-value pair।
7. আটাইতকৈ চুটি iterable শেষ হ'লে থামে।
8. দৈৰ্ঘ্য বেলেগ হ'লে `ValueError` দিয়ে।
9. `(1, 2)`, `(1, 3)`, `(2, 3))।
10. দুটা: `("A", "B")` আৰু `("B", "A")`।
11. তিনিটা item: 0, 1, 2।
12. ডাঙৰ iterator সম্পূৰ্ণ materialize কৰিলে অধিক memory লাগিব পাৰে।

## ৫.১২ অধিক পঢ়াৰ উৎস

- Python Tutorial — Structural Pattern Matching: https://docs.python.org/3/tutorial/controlflow.html#match-statements
- Python Language Reference — Patterns: https://docs.python.org/3/reference/compound_stmts.html#the-match-statement
- Built-in Functions — `enumerate()` আৰু `zip()`: https://docs.python.org/3/library/functions.html
- Python `itertools` documentation: https://docs.python.org/3/library/itertools.html

## অধ্যায়ৰ সাৰাংশ

Structural Pattern Matching-এ value-ৰ গঠন অনুসৰি program-ৰ পথ বাছনি কৰিবলৈ সহায় কৰে। Mapping আৰু sequence pattern-এ dictionary, list আৰু tuple-ৰ গঠন পৰীক্ষা কৰিব পাৰে; guard-এ অতিৰিক্ত চৰ্ত যোগ কৰে। `enumerate()`-এ index আৰু item একেলগে দিয়ে, `zip()`-এ একাধিক iterable-ৰ item জোৰা লগায়। `itertools`-এ combinations, permutations, Cartesian product আৰু iterator-ৰ অংশ লোৱাৰ দৰে কাম সহজ কৰে। সঠিক Python version, pattern capture-ৰ নিয়ম, zip-ৰ দৈৰ্ঘ্য আৰু iterator-ৰ memory ব্যৱহাৰ মনত ৰাখিব লাগে।`,
    },
    {
      id: 'ch-6',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৬: লুপ, ইটাৰেটৰ প্ৰট’কল আৰু জেনেৰেটৰ',
      subtitle: 'Iterator Protocol, Generators, Yield আৰু Context Managers',
      estimatedReadTime: '20 min',
      topics: ['__iter__ and __next__', 'Generators & Yield', 'Generator Expressions', 'Context Managers'],
      content: `## ৬.১ অধ্যায়টোৰ লক্ষ্য

এই অধ্যায়ৰ শেষত আপুনি—

- Iterable, Iterator আৰু Iterator Protocol-ৰ পাৰ্থক্য বুজিব পাৰিব।
- \`iter()\` আৰু \`next()\` কেনেকৈ কাম কৰে বুজিব পাৰিব।
- নিজৰ Iterator Class লিখিব পাৰিব।
- Generator Function, \`yield\`, \`yield from\` আৰু Generator Expression ব্যৱহাৰ কৰিব পাৰিব।
- Lazy Evaluation-ৰ সুবিধা আৰু সীমাবদ্ধতা চিনাক্ত কৰিব পাৰিব।
- \`with\` আৰু Context Manager-ৰ জৰিয়তে সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ কৰিব পাৰিব।

## ৬.২ লুপৰ ভিতৰৰ প্ৰক্ৰিয়া

আমি সাধাৰণতে \`for\` লুপ এনেদৰে লিখোঁ—

~~~python
ফল = [10, 20, 30]

for মান in ফল:
    print(মান)
~~~

কিন্তু Python-এ প্ৰতিটো বস্তুৰ ক্ষেত্ৰত নিজে নিজে পৰৱৰ্তী মান কেনেকৈ পাব? ইয়াৰ উত্তৰ হৈছে **Iterator Protocol**। \`for\` লুপে প্ৰথমে বস্তুটোৰ পৰা এটা iterator পায়, তাৰ পিছত এটাৰ পিছত এটা মান বিচাৰে। মান শেষ হ'লে iterator-এ \`StopIteration\` সংকেত দিয়ে আৰু লুপ বন্ধ হয়।

## ৬.৩ Iterable আৰু Iterator-ৰ পাৰ্থক্য

**Iterable (পুনৰাবৃত্তিযোগ্য বস্তু):** যিটো বস্তুৰ পৰা \`iter(obj)\` ব্যৱহাৰ কৰি iterator পোৱা যায়, সেয়া iterable। উদাহৰণ: list, tuple, string, dictionary আৰু set।

**Iterator (ইটাৰেটৰ):** যিটো বস্তুৱে \`next(obj)\`-ৰ জৰিয়তে পৰৱৰ্তী মান দিয়ে আৰু শেষ হ'লে \`StopIteration\` তোলে, সেয়া iterator।

~~~python
সংখ্যা = [10, 20, 30]  # Iterable
ইটাৰেটৰ = iter(সংখ্যা)  # Iterator

print(next(ইটাৰেটৰ))  # 10
print(next(ইটাৰেটৰ))  # 20
print(next(ইটাৰেটৰ))  # 30

# পৰৱৰ্তী next() কৰিলে StopIteration হ'ব
~~~

এটা list নিজে iterator নহয়; কিন্তু তাৰ পৰা iterator তৈয়াৰ কৰিব পাৰি। Iterator সাধাৰণতে নিজৰ অৱস্থা (state) ৰাখে। ওপৰৰ উদাহৰণত কোনটো মান শেষবাৰ দিয়া হ'ল, সেই অৱস্থা iterator-এ মনত ৰাখে।

## ৬.৪ Iterator Protocol: \`__iter__()\` আৰু \`__next__()\`

এটা iterator-এ দুটা বিশেষ পদ্ধতি সমৰ্থন কৰে—

1. \`__iter__()\`: iterator-টো নিজেই ঘূৰাই দিয়ে।
2. \`__next__()\`: পৰৱৰ্তী মান ঘূৰাই দিয়ে; মান শেষ হ'লে \`StopIteration\` তোলে।

নিজৰ iterator class-ৰ উদাহৰণ—

~~~python
class গণনা_ইটাৰেটৰ:
    def __init__(self, আৰম্ভণি, শেষ):
        self.বৰ্তমান = আৰম্ভণি
        self.শেষ = শেষ

    def __iter__(self):
        return self

    def __next__(self):
        if self.বৰ্তমান >= self.শেষ:
            raise StopIteration

        মান = self.বৰ্তমান
        self.বৰ্তমান += 1
        return মান


সংখ্যা = গণনা_ইটাৰেটৰ(5, 10)

for মান in সংখ্যা:
    print(মান)
~~~

আউটপুট:

~~~text
5
6
7
8
9
~~~

**মন কৰিব:** এই class-ৰ iterator-টো একেটা অৱস্থা ব্যৱহাৰ কৰে। এবাৰ শেষ হোৱাৰ পিছত একেটা object-ৰ পৰা পুনৰ আৰম্ভ নহয়। নতুন গণনা পাবলৈ নতুন object তৈয়াৰ কৰিব লাগে। \`__next__()\`-এ শেষ অৱস্থাত \`StopIteration\` তুলিবই লাগিব; নহ'লে \`for\` লুপ সঠিকভাৱে বন্ধ নহ'ব পাৰে।

## ৬.৫ Generator: কম ক'ডেৰে Iterator

Generator হৈছে iterator তৈয়াৰ কৰাৰ সহজ উপায়। সাধাৰণ function-ত \`return\`-এ function-ৰ কাম শেষ কৰে। Generator function-ত \`yield\`-এ এটা মান দিয়ে আৰু function-ৰ অৱস্থা স্থগিত ৰাখে। পিছৰবাৰ \`next()\` কৰিলে সেই স্থানৰ পৰাই পুনৰ চলিবলৈ আৰম্ভ কৰে।

~~~python
def একৰ_পৰা_পাঁচলৈ():
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5


ইটাৰেটৰ = একৰ_পৰা_পাঁচলৈ()

print(next(ইটাৰেটৰ))  # 1
print(next(ইটাৰেটৰ))  # 2
print(next(ইটাৰেটৰ))  # 3
~~~

Generator function-টো কল কৰিলেই ইয়াৰ ভিতৰৰ সকলো ক'ড চলি নাযায়; ই এটা generator object ঘূৰাই দিয়ে। মান বিচৰাৰ সময়তহে প্ৰয়োজনীয় অংশ চলে। সকলো মান একেলগে list-ত জমা নকৰাৰ বাবে ডাঙৰ ডেটাৰ ক্ষেত্ৰত মেম'ৰি ৰাহি হ'ব পাৰে।

## ৬.৬ Generator-ৰ অৱস্থা আৰু \`yield\`

তলৰ উদাহৰণটো লক্ষ্য কৰক—

~~~python
def গণনা():
    print("প্ৰথম ধাপ")
    yield 10

    print("দ্বিতীয় ধাপ")
    yield 20

    print("শেষ ধাপ")


g = গণনা()
print("Generator তৈয়াৰ হ'ল")
print(next(g))
print(next(g))
~~~

আউটপুটৰ ক্ৰম—

~~~text
Generator তৈয়াৰ হ'ল
প্ৰথম ধাপ
10
দ্বিতীয় ধাপ
20
~~~

শেষৰ \`next(g)\`-টোও কল কৰিলে "শেষ ধাপ" ছপা হ'ব আৰু তাৰ পিছত \`StopIteration\` উঠিব। Generator-এ \`yield\`-ৰ পিছৰ অৱস্থা সংৰক্ষণ কৰে; স্থানীয় variable-সমূহো পৰৱৰ্তী ধাপলৈ থাকি যায়।

## ৬.৭ অসীম ধাৰা আৰু Fibonacci Generator

Generator-এ অসীম ধাৰাও সৃষ্টি কৰিব পাৰে। কিন্তু অসীম generator-ৰ ওপৰত সীমাহীন \`for\` লুপ চলালে প্ৰগ্ৰাম বন্ধ নহ'বও পাৰে। সেয়ে কিমানটা মান লাগিব, সেই সীমা নিৰ্ধাৰণ কৰা উচিত।

~~~python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


for সংখ্যা in fibonacci():
    if সংখ্যা > 100:
        break
    print(সংখ্য, end=" ")
~~~

আউটপুট:

~~~text
0 1 1 2 3 5 8 13 21 34 55 89
~~~

ইয়াত \`yield\`-এ এটা Fibonacci সংখ্যা দিয়ে আৰু পৰৱৰ্তী সংখ্যাৰ বাবে অৱস্থা ৰাখে। \`break\`-এ 100-তকৈ ডাঙৰ মান পোৱাৰ আগতেই লুপ বন্ধ কৰে।

## ৬.৮ Generator Expression

List comprehension-এ সকলো ফলাফলৰ list তৈয়াৰ কৰে; Generator Expression-এ প্ৰয়োজন অনুসৰি এটাকৈ মান দিয়ে।

~~~python
# List comprehension
বৰ্গৰ_তালিকা = [x * x for x in range(5)]
print(বৰ্গৰ_তালিকা)

# Generator Expression
বৰ্গৰ_জেনেৰেটৰ = (x * x for x in range(5))
print(next(বৰ্গৰ_জেনেৰেটৰ))  # 0
print(next(বৰ্গৰ_জেনেৰেটৰ))  # 1
~~~

দুয়োটাৰ ফলাফলৰ ধৰণ একে নহয়। প্ৰথমটোৱে list দিয়ে, দ্বিতীয়টোৱে generator object দিয়ে। Generator-টো এবাৰ সম্পূৰ্ণ ব্যৱহাৰ কৰিলে সেই একেটা object-ৰ পৰা পুনৰ আৰম্ভ কৰিব নোৱাৰি।

## ৬.৯ \`yield from\`: আন Iterable-ৰ মান আগবঢ়োৱা

এটা generator-ৰ ভিতৰত আন iterable-ৰ মান এটাৰ পিছত এটা আগবঢ়াবলৈ \`yield from\` ব্যৱহাৰ কৰিব পাৰি।

~~~python
def সকলো_সংখ্যা():
    yield from [1, 2, 3]
    yield from (4, 5)

for মান in সকলো_সংখ্যা():
    print(মান, end=" ")
~~~

আউটপুট:

~~~text
1 2 3 4 5
~~~

ইয়াৰ অৰ্থ হৈছে list আৰু tuple-ৰ প্ৰতিটো মান generator-ৰ পৰা এটাকৈ yield কৰা। ডাঙৰ generator-সমূহ সৰু সৰু generator-ত ভাগ কৰি লিখিবলৈ ই সহায়ক।

## ৬.১০ Lazy Evaluation: প্ৰয়োজনৰ সময়তহে গণনা

Lazy Evaluation-ৰ অৰ্থ হৈছে ফলাফল আগতীয়াকৈ সকলো গণনা নকৰি, প্ৰয়োজন হ'লেহে গণনা কৰা। Generator ইয়াৰ এটা উদাহৰণ।

~~~python
def ডাঙৰ_গণনা():
    for সংখ্যা in range(1, 1000001):
        yield সংখ্যা * 2

g = ডাঙৰ_গণনা()
print(next(g))  # 2
print(next(g))  # 4
~~~

এই উদাহৰণত এক মিলিয়ন মানৰ list আগতেই তৈয়াৰ কৰা হোৱা নাই। কিন্তু মনত ৰাখিব—Generator সদায় list-তকৈ দ্ৰুত হ'ব বুলি ক'ব নোৱাৰি। বাৰে বাৰে একে ফলাফল লাগে আৰু ডেটা সৰু হয়, তেতিয়া list সুবিধাজনক হ'ব পাৰে। Generator-ৰ মান এবাৰ পাৰ হৈ গ'লে সাধাৰণতে পিছলৈ ঘূৰি যাব নোৱাৰি।

## ৬.১১ Generator বন্ধ কৰা আৰু ব্যতিক্ৰম

Generator স্বাভাৱিকভাৱে শেষ হ'লে বা \`close()\` কল কৰিলে বন্ধ হয়। Generator-ৰ ভিতৰত \`finally\` ব্যৱহাৰ কৰি পৰিষ্কাৰ-পৰিচ্ছন্নতাৰ কাম কৰিব পাৰি।

~~~python
def তথ্য_উৎপাদক():
    try:
        yield "প্ৰথম তথ্য"
        yield "দ্বিতীয় তথ্য"
    finally:
        print("Generator-ৰ পৰিষ্কাৰ কাম সম্পূৰ্ণ")

g = তথ্য_উৎপাদক()
print(next(g))
g.close()
~~~

\`close()\`-এ generator-ত \`GeneratorExit\` সংকেত প্ৰেৰণ কৰে। সাধাৰণতে ইয়াক ধৰি generator-ৰ পৰিষ্কাৰ কাম কৰা হয়; \`finally\` block-টো চলিব পাৰে।

## ৬.১২ Context Manager: সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ

ফাইল, নেটৱৰ্ক সংযোগ বা আন সম্পদ ব্যৱহাৰ কৰাৰ পিছত সেইবোৰ বন্ধ কৰা প্ৰয়োজন। \`with\` statement-এ কাম শেষ হ'লে—সাধাৰণভাৱে বা exception ঘটিলেও—সম্পদ পৰিষ্কাৰ কৰাৰ ব্যৱস্থা কৰে।

~~~python
with open("অসমীয়া.txt", "w", encoding="utf-8") as ফাইল:
    ফাইল.write("নমস্কাৰ, অসম!")

# with block শেষ হোৱাৰ পিছত ফাইল বন্ধ হয়
~~~

ইয়াত \`encoding="utf-8"\` ব্যৱহাৰ কৰা হৈছে যাতে অসমীয়া আখৰ সঠিকভাৱে লিখিব আৰু পঢ়িব পাৰি। ফাইল খোলাৰ কাম সফল নহ'লে exception হ'ব পাৰে; সেই ক্ষেত্ৰতো আগতে খোলা সম্পদ সঠিকভাৱে বন্ধ কৰাত context manager সহায় কৰে।

## ৬.১৩ নিজে Context Manager তৈয়াৰ কৰা

নিজৰ class-ত context manager সমৰ্থন কৰিবলৈ \`__enter__()\` আৰু \`__exit__()\` পদ্ধতি লিখিব পাৰি।

~~~python
class সৰল_সম্পদ:
    def __enter__(self):
        print("সম্পদ আৰম্ভ হ'ল")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("সম্পদ বন্ধ কৰা হ'ল")
        return False


with সৰল_সম্পদ() as বস্তু:
    print("সম্পদ ব্যৱহাৰ কৰা হৈছে")
~~~

- \`__enter__()\`-এ \`with\` block আৰম্ভ হোৱাৰ সময়ত চলে আৰু \`as\`-ত যি মান দিয়া হয় সেয়া ঘূৰাই দিয়ে।
- \`__exit__()\`-এ block শেষ হ'লে চলে; exception ঘটিলেও ইয়াক কল কৰা হয়।
- \`exc_type\`, \`exc_value\` আৰু \`traceback\`-এ exception-ৰ তথ্য দিয়ে; exception নহ'লে এইবোৰ \`None\` হয়।
- \`__exit__()\`-এ \`True\` ঘূৰাই দিলে exception দমন কৰা হয়। \`False\` বা \`None\` ঘূৰাই দিলে exception সাধাৰণ নিয়মেৰে বাহিৰলৈ যায়।

সাধাৰণতে exception লুকুৱাই নাৰাখিবলৈ \`False\` ঘূৰাই দিয়াই ভাল, যদিহে বিশেষ কাৰণত তাক সামলোৱাৰ উদ্দেশ্য নাথাকে।

## ৬.১৪ Generator-ৰ সহায়ত Context Manager

সৰু context manager লিখিবলৈ \`contextlib.contextmanager\` ব্যৱহাৰ কৰিব পাৰি। Generator-ৰ \`yield\`-ৰ আগৰ অংশটো resource setup আৰু পিছৰ অংশটো cleanup-ৰ কামত ব্যৱহাৰ হয়।

~~~python
from contextlib import contextmanager

@contextmanager
def বাৰ্তা_সম্পদ():
    print("আৰম্ভ")
    try:
        yield "ব্যৱহাৰৰ বাবে মান"
    finally:
        print("শেষ: পৰিষ্কাৰ কৰা হ'ল")


with বাৰ্তা_সম্পদ() as মান:
    print(মান)
~~~

আউটপুট:

~~~text
আৰম্ভ
ব্যৱহাৰৰ বাবে মান
শেষ: পৰিষ্কাৰ কৰা হ'ল
~~~

\`yield\`-ৰ আগত exception ঘটিলে block-ৰ ভিতৰৰ কাম আৰম্ভ নহ'বও পাৰে; \`with\` block-ৰ ভিতৰত exception ঘটিলে সেই exception-টো generator-ৰ \`yield\`-ৰ স্থানত পুনৰ উত্থাপিত হয়। সেয়ে cleanup-ৰ বাবে \`try/finally\` ব্যৱহাৰ কৰা হৈছে।

## ৬.১৫ সাধাৰণ ভুল আৰু সাৱধানতা

1. **Iterable আৰু Iterator একে বুলি ধৰা:** list iterable; \`iter(list)\`-এ iterator দিয়ে।
2. **Generator-ৰ পৰা পুনৰ আৰম্ভ হ'ব বুলি ধৰা:** শেষ হোৱা generator পুনৰ ব্যৱহাৰ কৰিব নোৱাৰি; নতুন generator তৈয়াৰ কৰক।
3. **অসীম generator-ত সীমাহীন লুপ:** \`break\`, \`islice()\` বা অন্য সীমা ব্যৱহাৰ কৰক।
4. **\`yield\` আৰু \`return\` একে বুলি ধৰা:** \`yield\`-এ স্থগিত অৱস্থা ৰাখে; \`return\`-এ function শেষ কৰে।
5. **\`__exit__()\`-এ সদায় exception দমন কৰে বুলি ধৰা:** কেৱল সত্য মান \`True\` ঘূৰালে exception দমন হয়।
6. **ফাইলৰ encoding উপেক্ষা কৰা:** অসমীয়া পাঠৰ বাবে স্পষ্টকৈ \`encoding="utf-8"\` দিয়ক।
7. **Generator-এ সদায় কম মেম'ৰি লয় বুলি ধৰা:** Generator-এ নিজে yield কৰা সকলো মান একেলগে জমা নকৰে, কিন্তু ইয়াৰ ভিতৰত যদি ডাঙৰ list বা cache ৰাখে তেন্তে মেম'ৰি ব্যৱহাৰ হ'ব পাৰে।

## ৬.১৬ অনুশীলনী

**প্ৰশ্ন ১:** Iterable আৰু Iterator-ৰ মাজত দুটা পাৰ্থক্য লিখক।

**প্ৰশ্ন ২:** \`iter([4, 5, 6])\`-ৰ ফলাফল কি ধৰণৰ বস্তু?

**প্ৰশ্ন ৩:** \`next()\`-এ iterator-ৰ সকলো মান শেষ হোৱাৰ পিছত কোনটো exception তোলে?

**প্ৰশ্ন ৪:** তলৰ Generator-টোৰ পৰা প্ৰথম তিনিটা মান কি পাব?

~~~python
def সংখ্যা():
    for x in range(2, 10, 2):
        yield x
~~~

**প্ৰশ্ন ৫:** Generator Function-ত \`yield\`-ৰ কাম কি?

**প্ৰশ্ন ৬:** List Comprehension আৰু Generator Expression-ৰ মাজত পাৰ্থক্য লিখক।

**প্ৰশ্ন ৭:** \`yield from [7, 8, 9]\`-এ কি কৰে?

**প্ৰশ্ন ৮:** \`with open(...)\` ব্যৱহাৰ কৰাৰ এটা সুবিধা লিখক।

**প্ৰশ্ন ৯:** Context Manager-ৰ \`__enter__()\` আৰু \`__exit__()\`-ৰ কাম কি?

**প্ৰশ্ন ১০:** \`__exit__()\`-এ \`True\` ঘূৰাই দিলে কি হয়?

**প্ৰশ্ন ১১:** ১ৰ পৰা ১০লৈ যুগ্ম সংখ্যা yield কৰা এটা Generator লিখক।

**প্ৰশ্ন ১২:** Fibonacci Generator-ৰ পৰা প্ৰথম ৮টা মান ছপা কৰা প্ৰগ্ৰাম লিখক।

## ৬.১৭ উত্তৰ আৰু ইংগিত

1. Iterable-ৰ পৰা iterator পোৱা যায়; Iterator-এ \`next()\`-এৰে পৰৱৰ্তী মান দিয়ে আৰু শেষত \`StopIteration\` তোলে।
2. এটা Iterator object।
3. \`StopIteration\`।
4. 2, 4, 6।
5. এটা মান দিয়ে আৰু function-ৰ অৱস্থা স্থগিত ৰাখে।
6. List Comprehension-এ list তৈয়াৰ কৰে; Generator Expression-এ প্ৰয়োজন অনুসৰি মান দিয়ে।
7. Iterable-ৰ প্ৰতিটো মান এটাকৈ yield কৰে।
8. Block শেষ হ'লে ফাইল বন্ধ কৰাত সহায় কৰে, exception ঘটিলেও।
9. \`__enter__()\`-এ resource আৰম্ভ কৰি মান দিয়ে; \`__exit__()\`-এ block শেষ হ'লে cleanup কৰে।
10. Block-ৰ exception দমন হয়।
11. এটা সম্ভৱ উত্তৰ:

~~~python
def যুগ্ম_সংখ্যা():
    for x in range(2, 11, 2):
        yield x

for x in যুগ্ম_সংখ্যা():
    print(x)
~~~

12. এটা সম্ভৱ উত্তৰ:

~~~python
def fibonacci():
    a, b = 0, 1
    for _ in range(8):
        yield a
        a, b = b, a + b

print(list(fibonacci()))
~~~

## ৬.১৮ সাৰাংশ

এই অধ্যায়ত Python-ৰ Iterator Protocol, Iterable আৰু Iterator-ৰ পাৰ্থক্য, নিজৰ Iterator Class, Generator Function, \`yield\`, Generator Expression, \`yield from\`, Lazy Evaluation আৰু Context Manager শিকিলোঁ। ডাঙৰ বা ক্ৰমাগত তথ্যৰ সৈতে কাম কৰোঁতে Generator উপযোগী; আৰু ফাইলৰ দৰে সম্পদ সুৰক্ষিতভাৱে ব্যৱহাৰ কৰিবলৈ Context Manager অতি গুৰুত্বপূৰ্ণ।

## ৬.১৯ অধিক অধ্যয়নৰ বাবে নিৰ্ভৰযোগ্য উৎস

- Python Documentation — Iterator Types: https://docs.python.org/3/library/stdtypes.html#iterator-types
- Python Documentation — Functional Programming HOWTO: https://docs.python.org/3/howto/functional.html
- Python Documentation — Expressions (Yield): https://docs.python.org/3/reference/expressions.html#yield-expressions
- Python Documentation — Generator Expressions: https://docs.python.org/3/reference/expressions.html#generator-expressions
- Python Documentation — The \`with\` statement: https://docs.python.org/3/reference/compound_stmts.html#the-with-statement
- Python Documentation — contextlib: https://docs.python.org/3/library/contextlib.html
`,
    },
    {
      id: 'ch-7',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৭: ফাংচন, স্কোপ (LEGB), ক্ল’জাৰ আৰু ডেকৰেটৰ',
      subtitle: 'Function Design, Scope Resolution, Closures, Decorators আৰু Testing',
      estimatedReadTime: '22 min',
      topics: ['Function Parameters', 'LEGB Rule', 'global আৰু nonlocal', 'Closures', 'Decorators', 'functools.wraps', 'Decorator Testing'],
      content: \`## ৭.১ ফাংচন কিয় প্ৰয়োজন?

ফাংচন হৈছে কোনো নিৰ্দিষ্ট কাম সম্পন্ন কৰা পুনৰ ব্যৱহাৰযোগ্য কোডৰ একক। একে কামৰ কোড বাৰে বাৰে লিখাৰ পৰিৱৰ্তে ফাংচন ব্যৱহাৰ কৰিলে কোড সংক্ষিপ্ত, পৰীক্ষাযোগ্য আৰু ৰক্ষণাবেক্ষণযোগ্য হয়।

এটা ভাল ফাংচনে সাধাৰণতে এটা স্পষ্ট দায়িত্ব পালন কৰে। ইয়াৰ নাম, ইনপুট আৰু ৰিটাৰ্ণ কৰা ফলাফল বুজিবলৈ সহজ হোৱা উচিত।

\\`\\`\\`python
def বৰ্গ(সংখ্যা):
    """এটা সংখ্যাৰ বৰ্গ ঘূৰাই দিয়ে।"""
    return সংখ্যা * সংখ্যা

ফল = বৰ্গ(6)
print(ফল)  # 36
\\`\\`\\`

ফাংচন সংজ্ঞায়িত কৰিলেই তাৰ ভিতৰৰ কোড চলি নাযায়; ফাংচনটো call কৰিলেহে চলে। \\`return\\`-এ ফলাফল caller-লৈ ঘূৰাই দিয়ে। কেৱল \\`print()\\` কৰিলে ফলাফল পৰ্দাত দেখা যায়, কিন্তু সেয়া নিজে নিজে return value নহয়।

## ৭.২ Parameters, Arguments আৰু Default Values

ফাংচন সংজ্ঞাৰ সময়ত দিয়া নামবোৰ parameter আৰু call কৰাৰ সময়ত দিয়া বাস্তৱ মানবোৰ argument।

\\`\\`\\`python
def আদৰণি(নাম, বাৰ্তা="নমস্কাৰ"):
    return f"{বাৰ্তা}, {নাম}!"

print(আদৰণি("ৰীণা"))                 # নমস্কাৰ, ৰীণা!
print(আদৰণি("ৰাহুল", "শুভ পুৱা"))   # শুভ পুৱা, ৰাহুল!
\\`\\`\\`

Python-ত positional argument, keyword argument, default parameter আৰু variable-length argument ব্যৱহাৰ কৰিব পাৰি।

\\`\\`\\`python
def মুঠ_হিচাপ(*সংখ্যাসমূহ):
    return sum(সংখ্যাসমূহ)

def পৰিচয়(**তথ্য):
    for key, value in তথ্য.items():
        print(key, "=", value)

print(মুঠ_হিচাপ(10, 20, 30))  # 60
পৰিচয়(নাম="মীনা", বয়স=22)
\\`\\`\\`

\\`*args\\`-এ positional arguments-সমূহ tuple হিচাপে আৰু \\`**kwargs\\`-এ keyword arguments-সমূহ dictionary হিচাপে সংগ্ৰহ কৰে। এই নাম দুটা প্ৰচলিত convention; \\`*\\` আৰু \\`**\\` চিহ্নই মূল কাম কৰে।

**গুৰুত্বপূৰ্ণ:** mutable default value যেনে list বা dictionary পোনপটীয়াকৈ default হিচাপে নিদিব। কাৰণ একেটা object বহু call-ত পুনৰ ব্যৱহাৰ হ’ব পাৰে।

\\`\\`\\`python
# ভুল ধৰণ
def ভুল_যোগ(মান, তালিকা=[]):
    তালিকা.append(মান)
    return তালিকা

# সঠিক ধৰণ
def সঠিক_যোগ(মান, তালিকা=None):
    if তালিকা is None:
        তালিকা = []
    তালিকা.append(মান)
    return তালিকা

print(সঠিক_যোগ(5))  # [5]
print(সঠিক_যোগ(8))  # [8]
\\`\\`\\`

## ৭.৩ Scope আৰু LEGB নিয়ম

Scope মানে কোনো নাম (variable/function) ক’ৰ পৰা ব্যৱহাৰ কৰিব পাৰি। Python-এ নাম বিচাৰোঁতে LEGB ক্ৰম অনুসৰণ কৰে:

1. **Local:** বৰ্তমান ফাংচনৰ ভিতৰত সংজ্ঞায়িত নাম।
2. **Enclosing:** ভিতৰৰ ফাংচনটোক আৱৰি থকা বাহিৰৰ ফাংচনৰ local scope।
3. **Global:** module-ৰ স্তৰত সংজ্ঞায়িত নাম।
4. **Built-in:** Python-ৰ built-in নাম, যেনে \\`len\\`, \\`sum\\`, \\`print\\`।

\\`\\`\\`python
x = "Global"

def বাহিৰৰ():
    x = "Enclosing"

    def ভিতৰৰ():
        x = "Local"
        print(x)

    ভিতৰৰ()

বাহিৰৰ()  # Local
print(x)   # Global
\\`\\`\\`

ভিতৰৰ ফাংচনত local \\`x\\` পোৱা যায়, সেয়ে enclosing বা global \\`x\\` ব্যৱহাৰ নহয়।

### global আৰু nonlocal

\\`global\\`-এ module-level নামত assignment কৰিবলৈ কয়। \\`nonlocal\\`-এ ওচৰৰ enclosing function scope-ত থকা আগৰ binding সলনি কৰিবলৈ কয়। দুয়োটাই কেৱল নামৰ binding-ৰ ক্ষেত্ৰত প্ৰযোজ্য; object mutable হ’লে object-ৰ ভিতৰৰ মান সলনি কৰিবলৈ সদায় এই keyword নালাগে।

\\`\\`\\`python
গণনা = 0

def এবাৰ_বঢ়োৱা():
    global গণনা
    গণনা += 1

def কাউণ্টাৰ_তৈয়াৰ():
    মান = 0

    def বঢ়োৱা():
        nonlocal মান
        মান += 1
        return মান

    return বঢ়োৱা

এবাৰ_বঢ়োৱা()
print(গণনা)  # 1

কাউণ্টাৰ = কাউণ্টাৰ_তৈয়াৰ()
print(কাউণ্টাৰ())  # 1
print(কাউণ্টাৰ())  # 2
\\`\\`\\`

**সাৱধান:** function-ৰ ভিতৰত কোনো নামত assignment থাকিলে, উপযুক্ত \\`global\\` বা \\`nonlocal\\` ঘোষণা নকৰিলে Python-এ সাধাৰণতে সেই নামক local বুলি গণ্য কৰে। তাৰ আগতে সেই local নাম পঢ়িবলৈ চেষ্টা কৰিলে \\`UnboundLocalError\\` হ’ব পাৰে।

## ৭.৪ Closure (ক্ল’জাৰ)

যেতিয়া inner function-এ enclosing function-ৰ কোনো variable ব্যৱহাৰ কৰে আৰু outer function শেষ হোৱাৰ পিছতো সেই variable-ৰ binding সংৰক্ষিত থাকে, তেতিয়া সেই inner function-টো closure হ’ব পাৰে।

\\`\\`\\`python
def গুণক_তৈয়াৰ_কৰা(গুণনীয়ক):
    def গুণক(সংখ্যা):
        return সংখ্যা * গুণনীয়ক
    return গুণক

দ্বিগুণ = গুণক_তৈয়াৰ_কৰা(2)
ত্ৰিগুণ = গুণক_তৈয়াৰ_কৰা(3)

print(দ্বিগুণ(5))  # 10
print(ত্ৰিগুণ(5))  # 15
\\`\\`\\`

ইয়াত \\`গুণক\\` function-এ \\`গুণনীয়ক\\` নামটো নিজৰ local scope-ত নাপালেও outer call শেষ হোৱাৰ পিছত ব্যৱহাৰ কৰিব পাৰে। Closure-এ state সংৰক্ষণ কৰিব পাৰে, কিন্তু ই নিজে নিজে thread-safe বা persistent storage নহয়।

## ৭.৫ Decorator (ডেকৰেটৰ) কি?

Decorator হৈছে এনে callable যিয়ে আন এটা function বা class গ্ৰহণ কৰি সাধাৰণতে নতুন callable ঘূৰাই দিয়ে। ইয়াৰ সহায়ত মূল function-ৰ কোড সলনি নকৰাকৈ logging, timing, permission check বা caching-ৰ দৰে অতিৰিক্ত আচৰণ যোগ কৰিব পাৰি।

\\`@ডেকৰেটৰ\\` syntax-ৰ অৰ্থ হ’ল function সংজ্ঞাৰ পিছত সেই function-টো decorator-লৈ পঠোৱা। অৰ্থাৎ:

\\`\\`\\`python
@ডেকৰেটৰ
def কাম():
    return "সম্পূৰ্ণ"

# ওপৰৰ syntax-ৰ সমতুল্য:
# def কাম():
#     return "সম্পূৰ্ণ"
# কাম = ডেকৰেটৰ(কাম)
\\`\\`\\`

### এটা সাধাৰণ decorator

\\`\\`\\`python
def লগ_ডেকৰেটৰ(func):
    def wrapper(*args, **kwargs):
        print("ফাংচন আৰম্ভ")
        ফলাফল = func(*args, **kwargs)
        print("ফাংচন শেষ")
        return ফলাফল
    return wrapper

@লগ_ডেকৰেটৰ
def যোগ(a, b):
    return a + b

print(যোগ(4, 7))
\\`\\`\\`

ইয়াত wrapper-এ মূল function-লৈ সকলো positional আৰু keyword argument আগবঢ়ায় আৰু তাৰ return value ঘূৰাই দিয়ে। কিন্তু exception হ’লে শেষৰ print-টো চলিবই বুলি নিশ্চয়তা নাই; তাৰ বাবে \\`try/finally\\` ব্যৱহাৰ কৰিব পাৰি।

## ৭.৬ functools.wraps কিয় ব্যৱহাৰ কৰিব লাগে?

Decorator-এ wrapper function ঘূৰাই দিলে function-ৰ metadata যেনে \\`__name__\\`, docstring আৰু introspection-ৰ তথ্য wrapper-ৰ হৈ যাব পাৰে। \\`functools.wraps\\`-এ মূল function-ৰ metadata wrapper-লৈ কপি কৰাত সহায় কৰে।

\\`\\`\\`python
from functools import wraps

def লগ_ডেকৰেটৰ(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"চলিছে: {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@লগ_ডেকৰেটৰ
def বৰ্গ(সংখ্যা):
    """সংখ্যাৰ বৰ্গ গণনা কৰে।"""
    return সংখ্যা ** 2

print(বৰ্গ(5))          # 25
print(বৰ্গ.__name__)    # বৰ্গ
print(বৰ্গ.__doc__)     # সংখ্যাৰ বৰ্গ গণনা কৰে।
\\`\\`\\`

## ৭.৭ সময় জোখা Decorator আৰু সঠিক ব্যাখ্যা

\\`time.perf_counter()\\` elapsed time জোখাৰ বাবে উপযোগী high-resolution counter। তলৰ decorator-এ function call-ৰ সময় জোখে। এই সময়ত function-ৰ ভিতৰৰ কাম, আৰু wrapper-ৰ সামান্য overhead দুয়োটাই অন্তৰ্ভুক্ত হ’ব পাৰে।

\\`\\`\\`python
import time
from functools import wraps

def সময়_জোখা(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        আৰম্ভণি = time.perf_counter()
        try:
            return func(*args, **kwargs)
        finally:
            শেষ = time.perf_counter()
            print(
                f"{func.__name__}: "
                f"{শেষ - আৰম্ভণি:.6f} ছেকেণ্ড"
            )
    return wrapper

@সময়_জোখা
def বৰ্গৰ_মুঠ(n):
    return sum(i * i for i in range(n))

ফল = বৰ্গৰ_মুঠ(100_000)
print("ফলাফল:", ফল)
\\`\\`\\`

এই decorator-এ function সফল হওক বা exception দিয়ক, দুয়ো ক্ষেত্ৰতে সময়ৰ তথ্য print কৰে। কিন্তু এটা run-ৰ ফলাফলৰ পৰা function সদায় কিমান দ্ৰুত সেই সিদ্ধান্ত ল’ব নোৱাৰি। Machine load, Python version, input size আৰু অন্যান্য কাৰকে সময় সলনি কৰিব পাৰে। সঠিক benchmark-ৰ বাবে একাধিক run আৰু উপযুক্ত benchmarking tool ব্যৱহাৰ কৰা উচিত।

## ৭.৮ Decorator-ৰ সীমাবদ্ধতা আৰু সাধাৰণ ভুল

- Wrapper-এ \\`return func(...)\\` নকৰিলে মূল function-ৰ ফলাফল হেৰাই যাব পাৰে।
- \\`*args\\` আৰু \\`**kwargs\\` নাথাকিলে wrapper-এ সকলো function signature সমৰ্থন নকৰিব পাৰে।
- \\`functools.wraps\\` বাদ দিলে introspection-ত বিভ্ৰান্তি হ’ব পাৰে।
- Decorator-ৰ ভিতৰত exception ধৰি নীৰৱে বাদ দিলে bug লুকাই থাকিব পাৰে।
- Decorator-এ function call-ৰ আচৰণ সলনি কৰিব পাৰে; সেয়ে side effect আৰু return type স্পষ্টকৈ লিখিব লাগে।
- Decorator-ৰ ক্ৰম গুৰুত্বপূৰ্ণ। একাধিক decorator তলৰ পৰা ওপৰলৈ apply হয়।

## ৭.৯ নিজে পৰীক্ষা কৰক

তলৰ প্ৰশ্নসমূহৰ উত্তৰ নিজে লিখি তাৰ পিছত উত্তৰ-সূচীৰ সৈতে মিলাওক।

1. Parameter আৰু argument-ৰ মাজত পাৰ্থক্য কি?
2. \\`return\\` আৰু \\`print()\\`-ৰ কাম কেনেকৈ পৃথক?
3. LEGB-ৰ সম্পূৰ্ণ ৰূপ লিখক।
4. \\`global\\` আৰু \\`nonlocal\\`-ৰ ব্যৱহাৰ কেতিয়া হয়?
5. Mutable default argument কিয় বিপজ্জনক হ’ব পাৰে?
6. Closure-ত enclosing variable কেনেকৈ ব্যৱহাৰ হয়?
7. Decorator-ৰ \\`@\\` syntax-ৰ সমতুল্য assignment লিখক।
8. \\`functools.wraps\\`-ৰ লাভ কি?
9. Timing decorator-ত \\`finally\\` কিয় উপযোগী?
10. \\`*args\\` আৰু \\`**kwargs\\`-এ কি সংগ্ৰহ কৰে?
11. তলৰ function-টোৰ ফলাফল কি?
    \\`\\`\\`python
    def বাহিৰৰ():
        মান = 10
        def ভিতৰৰ():
            return মান + 5
        return ভিতৰৰ
    f = বাহিৰৰ()
    print(f())
    \\`\\`\\`
12. এনে এটা decorator লিখক যিয়ে function call-ৰ আগতে "আৰম্ভ" আৰু শেষত "শেষ" print কৰে, আৰু মূল return value অক্ষুণ্ণ ৰাখে।

### উত্তৰ-সূচী

1. Parameter function definition-ত থকা নাম; argument function call-ত দিয়া মান।
2. \\`return\\`-এ caller-লৈ value ঘূৰাই দিয়ে; \\`print()\\`-এ output দেখুৱায়।
3. Local, Enclosing, Global, Built-in।
4. \\`global\\` module-level binding আৰু \\`nonlocal\\` enclosing function binding সলনি কৰিবলৈ।
5. একেটা mutable object একাধিক call-ত পুনৰ ব্যৱহাৰ হ’ব পাৰে।
6. Inner function-এ enclosing scope-ৰ binding ধৰি ৰাখে।
7. \\`ফাংচন = ডেকৰেটৰ(ফাংচন)\\`।
8. মূল function-ৰ metadata সংৰক্ষণ/প্ৰতিফলিত কৰাত সহায় কৰে।
9. Exception হ’লেও timing code চলাবলৈ।
10. \\`*args\\` positional arguments tuple-ত; \\`**kwargs\\` keyword arguments dictionary-ত।
11. \\`15\\`।
12. Wrapper-ত \\`try/finally\\` ব্যৱহাৰ কৰি মূল function call-ৰ return value ঘূৰাই দিব লাগে।

## ৭.১০ সাৰাংশ

এই অধ্যায়ত function parameter, return value, default argument, \\`*args\\`, \\`**kwargs\\`, LEGB scope, \\`global\\`, \\`nonlocal\\`, closure আৰু decorator শিকিলোঁ। এই ধাৰণাবোৰে ডাঙৰ Python program-ত পুনৰ ব্যৱহাৰযোগ্য, পৰীক্ষাযোগ্য আৰু সহজে ৰক্ষণাবেক্ষণ কৰিব পৰা কোড লিখাত সহায় কৰে।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Tutorial — Defining Functions: https://docs.python.org/3/tutorial/controlflow.html#defining-functions
- Python Execution Model — Naming and Binding: https://docs.python.org/3/reference/executionmodel.html
- Python Glossary — Closure: https://docs.python.org/3/glossary.html#term-closure
- Python functools — wraps: https://docs.python.org/3/library/functools.html#functools.wraps
- Python time — perf_counter: https://docs.python.org/3/library/time.html#time.perf_counter
\`,
    },
    id: 'ch-8',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৮: লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ',
      subtitle: 'Dynamic Array, Stack (LIFO), Queue (FIFO) আৰু Linked List',
      estimatedReadTime: '24 min',
      topics: ['Dynamic Array', 'Amortized Complexity', 'Stack & Valid Parentheses', 'Queue আৰু deque', 'Singly Linked List', 'Complexity Analysis'],
      content: \`## ৮.১ লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ কি?

যি ডেটা ষ্ট্ৰাকচাৰত উপাদানসমূহ এটা ক্ৰমত সজোৱা থাকে আৰু সাধাৰণতে প্ৰতিটো উপাদানৰ আগৰ আৰু পিছৰ উপাদানৰ সৈতে স্পষ্ট সম্পৰ্ক থাকে, তাক লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ বোলা হয়। Array, Stack, Queue আৰু Linked List ইয়াৰ উদাহৰণ।

ডেটা ষ্ট্ৰাকচাৰ বাছনি কৰোঁতে কেৱল কোড চুটি হোৱাটো নাচাব। কোনটো operation বেছি কৰিব লাগিব—index-ৰে পঢ়া, মাজত insert কৰা, শেষৰ পৰা delete কৰা, নে FIFO order-ত process কৰা—সেইটো বিবেচনা কৰিব লাগে।

## ৮.২ Dynamic Array (ডাইনামিক এৰে)

Array-ত উপাদানসমূহ index-ৰ সহায়ত পোৱা যায়। Python-ৰ \`list\` হৈছে dynamic array-ৰ দৰে ব্যৱহাৰযোগ্য sequence: ইয়াৰ আকাৰ বৃদ্ধি বা হ্ৰাস কৰিব পাৰি। Python list-ৰ ভিতৰৰ implementation ভাষাটোৰ implementation অনুসৰি পৃথক হ’ব পাৰে; তলৰ class-টো dynamic array-ৰ ধাৰণা শিকাবলৈ নিজে লিখা সৰল উদাহৰণ, Python list-ৰ আভ্যন্তৰীণ code নহয়।

### নিজে লিখা Dynamic Array

\`\`\`python
class ডাইনামিক_এৰে:
    def __init__(self):
        self.ধাৰক = [None] * 2
        self.গণনা = 0
        self.ক্ষমতা = 2

    def যোগ(self, মান):
        if self.গণনা == self.ক্ষমতা:
            self._বৃদ্ধি()
        self.ধাৰক[self.গণনা] = মান
        self.গণনা += 1

    def _বৃদ্ধি(self):
        নতুন_ধাৰক = [None] * (self.ক্ষমতা * 2)
        for i in range(self.গণনা):
            নতুন_ধাৰক[i] = self.ধাৰক[i]
        self.ধাৰক = নতুন_ধাৰক
        self.ক্ষমতা *= 2

    def __getitem__(self, সূচী):
        if not isinstance(সূচী, int):
            raise TypeError("সূচী পূৰ্ণসংখ্যা হ'ব লাগিব")
        if not 0 <= সূচী < self.গণনা:
            raise IndexError("সূচী বাহিৰত")
        return self.ধাৰক[সূচী]

    def __len__(self):
        return self.গণনা

    def __repr__(self):
        return repr([self[i] for i in range(len(self))])


arr = ডাইনামিক_এৰে()
for i in range(5):
    arr.যোগ(i * 10)

print(arr)       # [0, 10, 20, 30, 40]
print(arr[2])    # 20
print(len(arr))  # 5
\`\`\`

ইয়াত capacity শেষ হ’লে নতুন container-ৰ আকাৰ দুগুণ কৰা হয় আৰু পুৰণি উপাদানসমূহ কপি কৰা হয়। এই বৃদ্ধি operation-টো এটা নিৰ্দিষ্ট সময়ত O(n) হ’ব পাৰে, কিন্তু বহু append operation একেলগে বিবেচনা কৰিলে প্ৰতিটো append-ৰ amortized সময় O(1) হয়। এই উদাহৰণত negative index, slice, iteration আৰু deletion যোগ কৰা হোৱা নাই; সেয়ে ই সম্পূৰ্ণ Python list-ৰ বিকল্প নহয়।

### Array-ৰ সাধাৰণ Time Complexity

| Operation | সাধাৰণ জটিলতা |
|---|---:|
| Index-ৰে element পঢ়া | O(1) |
| শেষত append | Amortized O(1) |
| মাজত insert/delete | O(n) |
| Linear search | O(n) |

এইবোৰ dynamic array-ৰ সাধাৰণ বিশ্লেষণ; বাস্তৱ সময় hardware, data size আৰু implementation-ৰ ওপৰত নিৰ্ভৰ কৰে।

## ৮.৩ Stack (ষ্টেক) — LIFO

Stack-ত শেষত সোমোৱা উপাদানটো প্ৰথমে বাহিৰ হয়। ইয়াক LIFO (Last In, First Out) বোলা হয়। প্লেটৰ স্তূপৰ কথা ভাবিব পাৰি: ওপৰত থোৱা প্লেটখনেই প্ৰথমে উঠোৱা হয়।

প্ৰধান operation:
- \`push\`: উপাদান stack-ত যোগ কৰা।
- \`pop\`: ওপৰৰ উপাদান আঁতৰাই ঘূৰাই দিয়া।
- \`peek\`: ওপৰৰ উপাদান নুঠোৱাকৈ চোৱা।
- \`is_empty\`: stack খালী নে নহয় পৰীক্ষা কৰা।

\`\`\`python
class ষ্টেক:
    def __init__(self):
        self.তালিকা = []

    def push(self, মান):
        self.তালিকা.append(মান)

    def pop(self):
        if self.is_empty():
            raise IndexError("ষ্টেক খালী")
        return self.তালিকা.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("ষ্টেক খালী")
        return self.তালিকা[-1]

    def is_empty(self):
        return len(self.তালিকা) == 0

    def __len__(self):
        return len(self.তালিকা)


s = ষ্টেক()
s.push("A")
s.push("B")
print(s.peek())  # B
print(s.pop())   # B
print(s.pop())   # A
\`\`\`

Python list-ৰ শেষত \`append()\` আৰু \`pop()\` ব্যৱহাৰ কৰিলে সাধাৰণতে stack-ৰ বাবে উপযোগী দক্ষতা পোৱা যায়।

### সমস্যা: Valid Parentheses

এটা string-ত \`()\`, \`{}\`, \`[]\` বন্ধনীসমূহ সঠিক ক্ৰমত বন্ধ হৈছে নে নাই পৰীক্ষা কৰিব লাগে। Stack এই সমস্যাৰ স্বাভাৱিক সমাধান।

\`\`\`python
def বন্ধনী_মিল_কিনা(বাক্য: str) -> bool:
    জোড়া = {')': '(', '}': '{', ']': '['}
    স্তূপ = []

    for অক্ষৰ in বাক্য:
        if অক্ষৰ in "({[":
            স্তূপ.append(অক্ষৰ)
        elif অক্ষৰ in ")}]":
            if not স্তূপ:
                return False
            if স্তূপ.pop() != জোড়া[অক্ষৰ]:
                return False

    return len(স্তূপ) == 0


print(বন্ধনী_মিল_কিনা("({[]})"))  # True
print(বন্ধনী_মিল_কিনা("({[})"))   # False
print(বন্ধনী_মিল_কিনা("((()))"))  # True
print(বন্ধনী_মিল_কিনা("(()"))     # False
\`\`\`

প্ৰতিটো character-ৰ ওপৰত এবাৰকৈ loop চলে; সেয়ে সময় জটিলতা O(n), আৰু আটাইতকৈ বেয়া ক্ষেত্ৰত stack-ত O(n) উপাদান থাকিব পাৰে।

## ৮.৪ Queue (কিউ) — FIFO

Queue-ত প্ৰথমে সোমোৱা উপাদানটো প্ৰথমে বাহিৰ হয়। ইয়াক FIFO (First In, First Out) বোলা হয়। বেংকৰ শাৰীৰ দৰে: আগতে অহা ব্যক্তিজনক আগতে সেৱা দিয়া হয়।

Python-ত queue-ৰ বাবে \`collections.deque\` উপযোগী। List-ৰ \`pop(0)\`-এ বাকী উপাদানসমূহ সৰাবলগীয়া হ’ব পাৰে, সেয়ে ডাঙৰ queue-ত ইয়াক বাৰে বাৰে ব্যৱহাৰ কৰাটো অদক্ষ।

\`\`\`python
from collections import deque

class কিউ:
    def __init__(self):
        self.ধাৰক = deque()

    def যোগ(self, মান):
        self.ধাৰক.append(মান)

    def আঁতৰাও(self):
        if self.খালী():
            raise IndexError("কিউ খালী")
        return self.ধাৰক.popleft()

    def আগৰটো(self):
        if self.খালী():
            raise IndexError("কিউ খালী")
        return self.ধাৰক[0]

    def খালী(self):
        return len(self.ধাৰক) == 0

    def __len__(self):
        return len(self.ধাৰক)


q = কিউ()
q.যোগ("প্ৰথম")
q.যোগ("দ্বিতীয়")
q.যোগ("তৃতীয়")
print(q.আঁতৰাও())  # প্ৰথম
print(q.আঁতৰাও())  # দ্বিতীয়
\`\`\`

Queue-ৰ end-ত \`append()\` আৰু front-ৰ পৰা \`popleft()\` সাধাৰণতে O(1) operation।

### Queue ক’ত ব্যৱহাৰ হয়?

- Printer-ত print job-ৰ শাৰী।
- Server-ত অপেক্ষা কৰি থকা request।
- BFS graph traversal।
- Producer-consumer ধৰণৰ system।

## ৮.৫ Singly Linked List (একদিশীয় লিংকড লিষ্ট)

Linked List-ত প্ৰতিটো node-এ data আৰু পৰৱৰ্তী node-লৈ reference সংৰক্ষণ কৰে। Array-ৰ দৰে সকলো element একেলগে index-ৰে পোৱা নাযায়। প্ৰথম node-ক head বোলা হয় আৰু শেষ node-ৰ next সাধাৰণতে \`None\` হয়।

\`\`\`text
Head
 |
 v
[10 | next] -> [20 | next] -> [30 | None]
\`\`\`

### Node আৰু Linked List-ৰ উদাহৰণ

\`\`\`python
class নোড:
    def __init__(self, মান):
        self.মান = মান
        self.পৰৱৰ্তী = None


class লিংকড_লিষ্ট:
    def __init__(self):
        self.মুৰব্বী = None
        self.আকাৰ = 0

    def আৰম্ভণিত_যোগ(self, মান):
        নতুন = নোড(মান)
        নতুন.পৰৱৰ্তী = self.মুৰব্বী
        self.মুৰব্বী = নতুন
        self.আকাৰ += 1

    def শেষত_যোগ(self, মান):
        নতুন = নোড(মান)
        if self.মুৰব্বী is None:
            self.মুৰব্বী = নতুন
        else:
            বৰ্তমান = self.মুৰব্বী
            while বৰ্তমান.পৰৱৰ্তী is not None:
                বৰ্তমান = বৰ্তমান.পৰৱৰ্তী
            বৰ্তমান.পৰৱৰ্তী = নতুন
        self.আকাৰ += 1

    def বিচৰা(self, মান):
        বৰ্তমান = self.মুৰব্বী
        while বৰ্তমান is not None:
            if বৰ্তমান.মান == মান:
                return True
            বৰ্তমান = বৰ্তমান.পৰৱৰ্তী
        return False

    def দেখুওৱা(self):
        বৰ্তমান = self.মুৰব্বী
        মানসমূহ = []
        while বৰ্তমান is not None:
            মানসমূহ.append(str(বৰ্তমান.মান))
            বৰ্তমান = বৰ্তমান.পৰৱৰ্তী
        print(" -> ".join(মানসমূহ) + " -> None")

    def __len__(self):
        return self.আকাৰ


ll = লিংকড_লিষ্ট()
ll.শেষত_যোগ(20)
ll.শেষত_যোগ(30)
ll.আৰম্ভণিত_যোগ(10)
ll.দেখুওৱা()              # 10 -> 20 -> 30 -> None
print(ll.বিচৰা(20))       # True
print(ll.বিচৰা(99))       # False
print(len(ll))            # 3
\`\`\`

এই implementation-ত tail pointer নাই। সেয়ে শেষত যোগ কৰিবলৈ list-ৰ শেষলৈ যাব লাগে আৰু সময় O(n)। Head-ত যোগ O(1), search O(n)। Tail pointer সংৰক্ষণ কৰিলে শেষত যোগ O(1) কৰিব পাৰি, কিন্তু তেতিয়া empty list আৰু tail update সঠিককৈ সামলাব লাগিব।

## ৮.৬ চাৰিটা Data Structure-ৰ তুলনা

| গঠন | নিয়ম | সাধাৰণ ব্যৱহাৰ |
|---|---|---|
| Dynamic Array | Index-ভিত্তিক sequence | Random access, তালিকা |
| Stack | LIFO | Undo, function call, bracket matching |
| Queue | FIFO | Waiting line, BFS, task scheduling |
| Linked List | Node আৰু next reference | Sequential traversal, node insertion |

### সাধাৰণ Time Complexity

| Operation | Dynamic Array | Stack (list) | Queue (deque) | Singly Linked List |
|---|---:|---:|---:|---:|
| Index access | O(1) | — | — | O(n) |
| Search | O(n) | O(n) | O(n) | O(n) |
| Add at front | O(n) | — | O(1) with deque | O(1) |
| Add at end | Amortized O(1) | Amortized O(1) | O(1) | O(n) in this example |
| Remove next item | — | O(1) from end | O(1) from front | O(1) if head is removed |

জটিলতাৰ তালিকাখন সাধাৰণ operation-ৰ বিশ্লেষণ। নিৰ্দিষ্ট implementation আৰু operation-ৰ সংজ্ঞা অনুসৰি ফল পৃথক হ’ব পাৰে।

## ৮.৭ সাধাৰণ ভুল আৰু সাৱধানতা

1. Stack খালী অৱস্থাত \`pop()\` কৰিলে exception হ’ব পাৰে; আগতে empty check কৰক।
2. Queue-ত \`list.pop(0)\` ব্যৱহাৰ কৰিলে ডাঙৰ list-ত অদক্ষ হ’ব পাৰে; \`deque.popleft()\` ব্যৱহাৰ কৰক।
3. Linked List-ত traversal কৰাৰ সময়ত next reference আগবঢ়াবলৈ পাহৰিলে infinite loop হ’ব পাৰে।
4. Node যোগ কৰাৰ আগতে আৰু পিছত head/next reference সঠিককৈ update কৰক।
5. Dynamic array-ৰ resize-ত পুৰণি element কপি নকৰিলে data হেৰাব।
6. Amortized O(1) মানে প্ৰতিটো operation-এ সদায় O(1) সময় লয় বুলি নহয়; resize-ৰ সময়ত এটা append O(n) হ’ব পাৰে।

## ৮.৮ অনুশীলনী

1. LIFO আৰু FIFO-ৰ সম্পূৰ্ণ ৰূপ লিখক।
2. Dynamic Array-ত index access সাধাৰণতে O(1) কিয়?
3. Dynamic Array-ৰ capacity শেষ হ’লে কি কৰিব লাগে?
4. Stack-ৰ \`push\`, \`pop\` আৰু \`peek\` operation-ৰ কাম লিখক।
5. \`([{}])\` বন্ধনী string-টো valid নে? কাৰণ লিখক।
6. \`([)]\` কিয় invalid?
7. Queue-ত \`append()\` আৰু \`popleft()\`-ৰ ভূমিকা কি?
8. Python list-ৰ \`pop(0)\`-ৰ পৰিৱৰ্তে deque কিয় ব্যৱহাৰ কৰা হয়?
9. Linked List-ৰ node-ত কি দুটা মূল তথ্য থাকে?
10. এই Linked List-ত 5, 10, 15 ক্ৰমে যোগ কৰিলে head-ত 2 যোগ কৰাৰ পিছত ক্ৰম কি হ’ব?
11. এই অধ্যায়ৰ Linked List উদাহৰণত শেষত যোগ কৰাৰ সময় জটিলতা O(n) কিয়?
12. Stack আৰু Queue-ৰ বাস্তৱ জীৱনৰ এটাকৈ উদাহৰণ লিখক।

### উত্তৰ-সূচী

1. LIFO = Last In, First Out; FIFO = First In, First Out।
2. Index-ৰ সহায়ত element-ৰ স্থান পোনপটীয়াকৈ নিৰ্ধাৰণ কৰিব পাৰি।
3. ডাঙৰ container সৃষ্টি কৰি পুৰণি উপাদান কপি কৰি নতুন উপাদান যোগ কৰিব লাগে।
4. Push যোগ কৰে, pop ওপৰৰটো আঁতৰায়, peek ওপৰৰটো চায়।
5. Valid; প্ৰতিটো opening bracket-ৰ closing bracket সঠিক উলটি ক্ৰমত আছে।
6. Closing bracket-ৰ ক্ৰম stack-ৰ শীৰ্ষ opening bracket-ৰ সৈতে মিলা নাই।
7. \`append()\` queue-ৰ শেষত যোগ কৰে; \`popleft()\` আগৰ উপাদান আঁতৰায়।
8. \`pop(0)\`-এ বাকী element shift কৰিব পাৰে; deque-ৰ front removal দক্ষ।
9. Data আৰু next node-লৈ reference।
10. 2 -> 5 -> 10 -> 15।
11. Tail pointer নথকাৰ বাবে শেষ node বিচাৰি সম্পূৰ্ণ list traverse কৰিব লাগে।
12. Stack: browser-ৰ undo history; Queue: printer-ৰ job line।

## ৮.৯ সাৰাংশ

এই অধ্যায়ত Dynamic Array-ৰ resize আৰু amortized complexity, Stack-ৰ LIFO নিয়ম, Queue-ৰ FIFO নিয়ম আৰু Linked List-ৰ node/reference-ভিত্তিক গঠন শিকিলোঁ। কোনটো data structure বাছনি কৰিব লাগে সেয়া operation-ৰ প্ৰয়োজন আৰু complexity-ৰ ওপৰত নিৰ্ভৰ কৰে।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Tutorial — Data Structures: https://docs.python.org/3/tutorial/datastructures.html
- Python Standard Library — collections.deque: https://docs.python.org/3/library/collections.html#collections.deque
- Python Wiki — Time Complexity: https://wiki.python.org/moin/TimeComplexity
- Python Data Model — Special Method Names: https://docs.python.org/3/reference/datamodel.html#special-method-names
\`,
    },
    id: 'ch-9',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৯: নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ (BST & Graphs)',
      subtitle: 'Tree Concepts, Binary Search Tree, Traversal, Graph Representation, BFS আৰু DFS',
      estimatedReadTime: '25 min',
      topics: ['Tree Fundamentals', 'Binary Search Tree', 'Tree Traversal', 'Graph Representation', 'BFS', 'DFS', 'Complexity Analysis'],
      content: \`## ৯.১ নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ কি?

লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰত উপাদানসমূহ সাধাৰণতে এটা ক্ৰমত থাকে। কিন্তু নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰত তথ্যসমূহ স্তৰভিত্তিক বা জালিকা (network) ৰূপত সংযুক্ত থাকিব পাৰে। Tree আৰু Graph ইয়াৰ দুটা গুৰুত্বপূৰ্ণ উদাহৰণ।

- **Tree:** এটা hierarchical গঠন; ইয়াত node-সমূহ parent-child সম্পৰ্কেৰে সংযুক্ত।
- **Graph:** vertex (node) আৰু edge (সংযোগ)ৰ সমষ্টি; ই জটিল network দেখুৱাব পাৰে।

## ৯.২ Tree-ৰ মৌলিক ধাৰণা

Tree-ৰ সাধাৰণ শব্দসমূহ:

- **Root:** গছৰ আৰম্ভণিৰ শীৰ্ষ node।
- **Parent:** যি node-ৰ তলত আন node থাকে।
- **Child:** কোনো parent-ৰ সৈতে সংযুক্ত তলৰ node।
- **Leaf:** যাৰ কোনো child নাই।
- **Edge:** দুটা node-ৰ মাজৰ সংযোগ।
- **Depth:** root-ৰ পৰা কোনো node-লৈ edge-ৰ সংখ্যা।
- **Height:** কোনো node-ৰ পৰা তলৰ আটাইতকৈ দূৰৰ leaf-লৈ edge-ৰ সৰ্বাধিক সংখ্যা।

Tree-ৰ height গণনা কৰাৰ সময়ত convention স্পষ্ট কৰা উচিত। এই অধ্যায়ত leaf node-ৰ height 0 ধৰা হৈছে।

## ৯.৩ Binary Tree আৰু Binary Search Tree (BST)

Binary Tree-ত প্ৰতিটো node-ৰ সৰ্বাধিক দুটা child থাকিব পাৰে: left আৰু right। Binary Search Tree (BST) হৈছে বিশেষ Binary Tree, য’ত প্ৰতিটো node-ৰ বাবে বাওঁফালৰ subtree-ৰ মান node-ৰ মানতকৈ সৰু আৰু সোঁফালৰ subtree-ৰ মান node-ৰ মানতকৈ ডাঙৰ হয়। এই অধ্যায়ৰ উদাহৰণত duplicate value অনুমতি দিয়া হোৱা নাই।

### BST-ৰ Node আৰু Insert

\`\`\`python
class ট্ৰি_নোড:
    def __init__(self, মান):
        self.মান = মান
        self.বাওঁ = None
        self.সোঁ = None


class BST:
    def __init__(self):
        self.মূল = None

    def যোগ(self, মান):
        if self.মূল is None:
            self.মূল = ট্ৰি_নোড(মান)
            return

        বৰ্তমান = self.মূল
        while True:
            if মান == বৰ্তমান.মান:
                raise ValueError("Duplicate মান অনুমতি দিয়া হোৱা নাই")
            if মান < বৰ্তমান.মান:
                if বৰ্তমান.বাওঁ is None:
                    বৰ্তমান.বাওঁ = ট্ৰি_নোড(মান)
                    return
                বৰ্তমান = বৰ্তমান.বাওঁ
            else:
                if বৰ্তমান.সোঁ is None:
                    বৰ্তমান.সোঁ = ট্ৰি_নোড(মান)
                    return
                বৰ্তমান = বৰ্তমান.সোঁ

    def বিচৰা(self, মান):
        বৰ্তমান = self.মূল
        while বৰ্তমান is not None:
            if মান == বৰ্তমান.মান:
                return True
            if মান < বৰ্তমান.মান:
                বৰ্তমান = বৰ্তমান.বাওঁ
            else:
                বৰ্তমান = বৰ্তমান.সোঁ
        return False
\`\`\`

### BST-ত Traversal

Traversal মানে Tree-ৰ node-সমূহ নিৰ্দিষ্ট ক্ৰমত visit কৰা।

1. **In-order:** Left → Root → Right। BST-ত ই ascending ক্ৰমত মান দিয়ে।
2. **Pre-order:** Root → Left → Right। Tree-ৰ গঠন serialize কৰাত উপযোগী হ’ব পাৰে।
3. **Post-order:** Left → Right → Root। Child-ৰ কাম শেষ কৰি parent process কৰাৰ ক্ষেত্ৰত উপযোগী।

\`\`\`python
def in_order(মূল):
    ফল = []

    def visit(বৰ্তমান):
        if বৰ্তমান is None:
            return
        visit(বৰ্তমান.বাওঁ)
        ফল.append(বৰ্তমান.মান)
        visit(বৰ্তমান.সোঁ)

    visit(মূল)
    return ফল


def pre_order(মূল):
    ফল = []

    def visit(বৰ্তমান):
        if বৰ্তমান is None:
            return
        ফল.append(বৰ্তমান.মান)
        visit(বৰ্তমান.বাওঁ)
        visit(বৰ্তমান.সোঁ)

    visit(মূল)
    return ফল


def post_order(মূল):
    ফল = []

    def visit(বৰ্তমান):
        if বৰ্তমান is None:
            return
        visit(বৰ্তমান.বাওঁ)
        visit(বৰ্তমান.সোঁ)
        ফল.append(বৰ্তমান.মান)

    visit(মূল)
    return ফল


bst = BST()
for x in [50, 30, 70, 20, 40, 60, 80]:
    bst.যোগ(x)

print(in_order(bst.মূল))   # [20, 30, 40, 50, 60, 70, 80]
print(pre_order(bst.মূল))  # [50, 30, 20, 40, 70, 60, 80]
print(post_order(bst.মূল)) # [20, 40, 30, 60, 80, 70, 50]
print(bst.বিচৰা(60))       # True
print(bst.বিচৰা(99))       # False
\`\`\`

তলৰ traversal function-সমূহে আগৰ BST class-ৰ root node argument হিচাপে গ্ৰহণ কৰে। প্ৰথম code block-ত BST তৈয়াৰ কৰাৰ পিছত এই function-সমূহ ব্যৱহাৰ কৰিব পাৰি।

### BST-ৰ সময় জটিলতা

| Operation | Balanced BST | Skewed BST |
|---|---:|---:|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Traversal | O(n) | O(n) |

BST সদায় balanced নহয়। যদি ক্ৰমাগত ascending মান insert কৰা হয়, tree এটা linked list-ৰ দৰে দীঘল হৈ যাব পাৰে। Balanced BST-ৰ বাবে AVL Tree বা Red-Black Tree-ৰ দৰে পদ্ধতি ব্যৱহাৰ কৰা হয়।

## ৯.৪ Graph-ৰ মৌলিক ধাৰণা

Graph হৈছে \(G=(V,E)\), য’ত \(V\) হৈছে vertex-ৰ set আৰু \(E\) হৈছে edge-ৰ set।

- **Vertex/Node:** Graph-ৰ এটা বিন্দু বা entity।
- **Edge:** দুটা vertex-ৰ সংযোগ।
- **Directed Graph:** Edge-ৰ দিশ থাকে।
- **Undirected Graph:** Edge-ৰ নিৰ্দিষ্ট দিশ নাথাকে।
- **Weighted Graph:** Edge-ৰ সৈতে cost, distance বা weight থাকে।
- **Cycle:** কোনো পথ অনুসৰণ কৰি পুনৰ আগৰ node-লৈ ঘূৰি অহা বন্ধ পথ।

উদাহৰণস্বৰূপে, চহৰসমূহ vertex আৰু সিহঁতৰ মাজৰ পথসমূহ edge হিচাপে দেখুৱাব পাৰি।

## ৯.৫ Graph কেনেকৈ সংৰক্ষণ কৰিব পাৰি?

### Adjacency List

প্ৰতিটো vertex-ৰ ওচৰ-চুবুৰীয়া vertex-সমূহ list-ত ৰখা হয়। Sparse graph-ৰ বাবে ই সাধাৰণতে memory-efficient।

\`\`\`python
গ্ৰাফ = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C"]
}
\`\`\`

ইয়াত graph-টো undirected হিচাপে দেখুওৱা হৈছে; সেয়ে A-ৰ পৰা B-লৈ edge থাকিলে B-ৰ list-তো A থাকিব লাগে।

### Adjacency Matrix

Matrix-ত \`matrix[i][j]\`-এ vertex i আৰু j-ৰ মাজত edge আছে নে নাই দেখুৱায়। Unweighted graph-ত 1 মানে edge আৰু 0 মানে edge নাই।

\`\`\`python
মেট্ৰিক্স = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]
\`\`\`

Adjacency Matrix-ৰ memory সাধাৰণতে O(V²); Adjacency List-ত O(V+E) space লাগে (সাধাৰণ adjacency-list representation-ত)।

## ৯.৬ Breadth-First Search (BFS)

BFS-এ আৰম্ভণিৰ node-ৰ পৰা স্তৰ অনুসৰি চুবুৰীয়া node-সমূহ visit কৰে। ইয়াত Queue ব্যৱহাৰ কৰা হয়। Unweighted graph-ত BFS-এ আৰম্ভণিৰ node-ৰ পৰা প্ৰতিটো reachable node-লৈ edge-ৰ সংখ্যাৰ হিচাপত shortest path distance বিচাৰি উলিয়াব পাৰে।

\`\`\`python
from collections import deque

def গ্ৰাফ_BFS(গ্ৰাফ, আৰম্ভণি):
    if আৰম্ভণি not in গ্ৰাফ:
        return []

    ভ্ৰমণ = {আৰম্ভণি}
    কিউ = deque([আৰম্ভণি])
    ক্ৰম = []

    while কিউ:
        নোড = কিউ.popleft()
        ক্ৰম.append(নোড)

        for চুবুৰীয়া in গ্ৰাফ.get(নোড, []):
            if চুবুৰীয়া not in ভ্ৰমণ:
                ভ্ৰমণ.add(চুবুৰীয়া)
                কিউ.append(চুবুৰীয়া)

    return ক্ৰম


গ্ৰাফ = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": ["F"],
    "F": []
}

print(গ্ৰাফ_BFS(গ্ৰাফ, "A"))
# ['A', 'B', 'C', 'D', 'E', 'F']
\`\`\`

Visited set-ত node-টো queue-ত যোগ কৰাৰ সময়তেই ৰাখা হৈছে। ইয়াৰ ফলত একেটা node বাৰে বাৰে queue-ত সোমোৱাৰ সম্ভাৱনা কমে আৰু cycle থাকিলেও algorithm শেষ হয়।

## ৯.৭ Depth-First Search (DFS)

DFS-এ এটা branch-ত যিমান দূৰ সম্ভৱ আগবাঢ়ি যায়, তাৰ পিছত পিছলৈ ঘূৰি আন branch visit কৰে। Recursive DFS-ত function call stack ব্যৱহাৰ হয়; iterative DFS-ত explicit stack ব্যৱহাৰ কৰিব পাৰি।

### Recursive DFS

\`\`\`python
def গ্ৰাফ_DFS(গ্ৰাফ, আৰম্ভণি):
    ভ্ৰমণ = set()
    ক্ৰম = []

    def visit(নোড):
        ভ্ৰমণ.add(নোড)
        ক্ৰম.append(নোড)

        for চুবুৰীয়া in গ্ৰাফ.get(নোড, []):
            if চুবুৰীয়া not in ভ্ৰমণ:
                visit(চুবুৰীয়া)

    if আৰম্ভণি in গ্ৰাফ:
        visit(আৰম্ভণি)

    return ক্ৰম


print(গ্ৰাফ_DFS(গ্ৰাফ, "A"))
# ['A', 'B', 'D', 'E', 'F', 'C']
\`\`\`

DFS-ৰ visit order adjacency list-ত চুবুৰীয়াসকলৰ ক্ৰমৰ ওপৰত নিৰ্ভৰ কৰে। একেটা graph-ৰ বাবে চুবুৰীয়াৰ ক্ৰম সলনি কৰিলে DFS order-ও সলনি হ’ব পাৰে।

### Iterative DFS

বহুত দীঘল graph-ত recursive DFS-এ Python recursion limit অতিক্ৰম কৰিব পাৰে। তেনে ক্ষেত্ৰত explicit stack ব্যৱহাৰ কৰিব পাৰি।

\`\`\`python
def গ্ৰাফ_DFS_ইটাৰেটিভ(গ্ৰাফ, আৰম্ভণি):
    if আৰম্ভণি not in গ্ৰাফ:
        return []

    ভ্ৰমণ = set()
    স্তূপ = [আৰম্ভণি]
    ক্ৰম = []

    while স্তূপ:
        নোড = স্তূপ.pop()
        if নোড in ভ্ৰমণ:
            continue

        ভ্ৰমণ.add(নোড)
        ক্ৰম.append(নোড)

        # একে visit order বিচাৰিলে reverse-ত push কৰা হৈছে।
        for চুবুৰীয়া in reversed(গ্ৰাফ.get(নোড, [])):
            if চুবুৰীয়া not in ভ্ৰমণ:
                স্তূপ.append(চুবুৰীয়া)

    return ক্ৰম
\`\`\`

## ৯.৮ BFS আৰু DFS-ৰ তুলনা

| বিষয় | BFS | DFS |
|---|---|---|
| মূল পদ্ধতি | স্তৰ অনুসৰি | গভীৰতালৈ |
| Data Structure | Queue | Stack / Recursion |
| Unweighted shortest path | হয় | নিশ্চিত নহয় |
| Cycle handle | Visited set | Visited set |
| সাধাৰণ সময় | O(V+E) | O(V+E) |
| ব্যৱহাৰ | Shortest path, level traversal | Path exploration, connectivity, cycle analysis |

এই জটিলতা adjacency-list representation আৰু প্ৰতিটো vertex/edge উপযুক্তভাৱে visit কৰাৰ সাধাৰণ ক্ষেত্ৰৰ বাবে।

## ৯.৯ সাধাৰণ ভুল আৰু সাৱধানতা

1. BFS/DFS-ত visited set নাথাকিলে cycle থকা graph-ত algorithm পুনৰাবৃত্তিত সোমাব পাৰে।
2. BFS-ত stack নহয়, queue ব্যৱহাৰ কৰা হয়।
3. DFS-ত recursion ব্যৱহাৰ কৰিলে recursion depth-ৰ সীমা মনত ৰাখিব লাগে।
4. Undirected graph-ত edge দুয়ো দিশৰ adjacency list-ত যোগ কৰিব লাগে।
5. BST-ত duplicate value কেনেকৈ handle কৰা হ’ব, সেই নিয়ম আগতেই নিৰ্ধাৰণ কৰিব লাগে।
6. BST-ৰ search সদায় O(log n) নহয়; skewed tree-ত O(n) হ’ব পাৰে।
7. BFS-এ weighted graph-ত সাধাৰণতে weighted shortest path নিদিয়ে; non-negative weight-ৰ বাবে Dijkstra-ৰ দৰে algorithm প্ৰয়োজন হ’ব পাৰে।
8. Traversal order-ৰ ওপৰত adjacency list-ৰ child order-ৰ প্ৰভাৱ থাকে।

## ৯.১০ অনুশীলনী

1. Tree আৰু Graph-ৰ মাজত দুটা পাৰ্থক্য লিখক।
2. Root node আৰু Leaf node কি?
3. Binary Tree-ৰ প্ৰতিটো node-ৰ সৰ্বাধিক কিমান child থাকিব পাৰে?
4. BST-ৰ In-order traversal-এ সাধাৰণতে কেনে ক্ৰম দিয়ে?
5. BST-ত ascending order-ত মান insert কৰিলে tree কিয় skewed হ’ব পাৰে?
6. Graph-ৰ Vertex আৰু Edge বুলিলে কি বুজায়?
7. Directed আৰু Undirected Graph-ৰ পাৰ্থক্য লিখক।
8. BFS-ত কোন data structure ব্যৱহাৰ কৰা হয়?
9. DFS-ত কোন data structure ব্যৱহাৰ কৰা হয়?
10. Visited set-ৰ প্ৰয়োজন কিয়?
11. Unweighted graph-ত shortest path বিচাৰিবলৈ BFS কিয় উপযোগী?
12. Adjacency Matrix-ৰ space complexity কিমান?
13. Adjacency List-ৰ space complexity সাধাৰণতে কিমান?
14. Recursive DFS-ৰ সলনি iterative DFS কেতিয়া ব্যৱহাৰ কৰিব পাৰি?

### উত্তৰ-সূচী

1. Tree hierarchical আৰু সাধাৰণতে root-ভিত্তিক; Graph-ত বহু ধৰণৰ সংযোগ আৰু cycle থাকিব পাৰে।
2. Root হৈছে আৰম্ভণিৰ node; Leaf-ৰ কোনো child নাই।
3. দুটা।
4. Ascending ক্ৰম, যদি BST-ৰ ordering rule সঠিক থাকে।
5. প্ৰতিটো নতুন ডাঙৰ মান সোঁফালৰ child-ত যোগ হৈ একমুখী দীঘল শৃংখল গঠন কৰিব পাৰে।
6. Vertex হৈছে node; Edge হৈছে node-সমূহৰ সংযোগ।
7. Directed edge-ৰ দিশ থাকে; Undirected edge-ৰ নিৰ্দিষ্ট দিশ নাথাকে।
8. Queue।
9. Stack বা recursion call stack।
10. একেটা node পুনৰ visit কৰি cycle বা অনন্ত loop সৃষ্টি হোৱাটো ৰোধ কৰিবলৈ।
11. BFS স্তৰ অনুসৰি visit কৰে; প্ৰথমবাৰ node পোৱা পথটোৱেই unweighted graph-ত edge সংখ্যাৰ হিচাপত shortest হয়।
12. O(V²)।
13. O(V+E)।
14. Graph গভীৰ হ’লে বা recursion limit অতিক্ৰম কৰাৰ আশংকা থাকিলে।

## ৯.১১ সাৰাংশ

এই অধ্যায়ত Tree, Binary Tree, BST, traversal, Graph representation, BFS আৰু DFS শিকিলোঁ। BST-ৰ performance tree-ৰ shape-ৰ ওপৰত নিৰ্ভৰ কৰে। BFS-এ queue আৰু DFS-এ stack বা recursion ব্যৱহাৰ কৰে। Graph algorithm লিখোঁতে visited set, adjacency representation আৰু complexity সঠিকভাৱে বুজাটো অত্যন্ত গুৰুত্বপূৰ্ণ।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Tutorial — Data Structures: https://docs.python.org/3/tutorial/datastructures.html
- Python Standard Library — collections.deque: https://docs.python.org/3/library/collections.html#collections.deque
- Python Built-in Types — Set: https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset
- Python Tutorial — Defining Functions and Recursion: https://docs.python.org/3/tutorial/controlflow.html#defining-functions
\`,
    },
    id: 'ch-10',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ১০: টাইম-স্পেচ কমপেক্সিটি আৰু ছৰ্টিং এলগৰিদম',
      subtitle: 'Big-O, Merge Sort, Quick Sort আৰু Binary Search',
      estimatedReadTime: '25 min',
      topics: ['Time Complexity', 'Space Complexity', 'Big-O and Growth Rates', 'Merge Sort', 'Quick Sort', 'Binary Search', 'Algorithm Comparison'],
      content: \`## ১০.১ এলগৰিদমৰ দক্ষতা কিয় জোখা হয়?

এটা সমস্যা সমাধান কৰিবলৈ বহুতো algorithm থাকিব পাৰে। সৰু input-ত সকলো algorithm দ্ৰুত যেন লাগিব পাৰে, কিন্তু input ডাঙৰ হ’লে কিছুমান algorithm বহুত বেছি সময় বা memory ব্যৱহাৰ কৰে। সেইবাবে algorithm বিশ্লেষণত সাধাৰণতে দুটা দিশ চোৱা হয়:

- **Time Complexity:** input-ৰ আকাৰ বৃদ্ধি হ’লে operation-ৰ সংখ্যা কেনেকৈ বৃদ্ধি পায়।
- **Space Complexity:** algorithm চলাবলৈ কিমান অতিৰিক্ত memory লাগে।

Time complexity মানে ঘড়ীৰে মাপা নিৰ্দিষ্ট ছেকেণ্ড নহয়। ই input size-ৰ সৈতে operation-ৰ বৃদ্ধিৰ ধৰণ বুজায়। বাস্তৱ সময় processor, programming language, implementation, input data আৰু system load-ৰ ওপৰত নিৰ্ভৰ কৰে।

## ১০.২ Big-O Notation

Big-O notation-এ input size \(n\) বৃদ্ধি হ’লে algorithm-ৰ upper-bound growth rate বৰ্ণনা কৰে। সাধাৰণতে constant factor আৰু নিম্ন-স্তৰৰ term বাদ দি মুখ্য বৃদ্ধি ধৰণটো লক্ষ্য কৰা হয়।

উদাহৰণ: \(3n^2 + 5n + 10\) ৰ Big-O হৈছে \(O(n^2)\), কাৰণ ডাঙৰ \(n\)-ত \(n^2\) term-টোৱে মুখ্য প্ৰভাৱ পেলায়।

| নোটেশন | নাম | সাধাৰণ উদাহৰণ |
|---|---|---|
| O(1) | Constant | Array index access |
| O(log n) | Logarithmic | Sorted data-ত Binary Search |
| O(n) | Linear | Linear Search |
| O(n log n) | Linearithmic | Merge Sort, average-case Heap Sort |
| O(n²) | Quadratic | Nested loop, Bubble Sort worst case |
| O(2ⁿ) | Exponential | সাধাৰণ recursive Fibonacci-ৰ naive implementation |
| O(n!) | Factorial | সকলো permutation পৰীক্ষা কৰা brute-force search |

এই তালিকাৰ উদাহৰণসমূহ সাধাৰণ ক্ষেত্ৰৰ বাবে; সঠিক জটিলতা algorithm আৰু implementation অনুসৰি নিৰ্ধাৰিত হয়।

### Growth Rate-ৰ সহজ তুলনা

ধৰি লওক \(n\) হৈছে input-ত থকা element-ৰ সংখ্যা। O(n) algorithm-ত input দুগুণ হ’লে কাম প্ৰায় দুগুণ হ’ব পাৰে। O(n²)-ত input দুগুণ হ’লে মুখ্য term প্ৰায় চাৰিগুণ হয়। এইটো asymptotic তুলনা; বাস্তৱ সময় একে অনুপাতত সলনি হ’বই বুলি নহয়।

## ১০.৩ Best, Average আৰু Worst Case

একেটা algorithm-ৰ input অনুসৰি চলাৰ ধৰণ বেলেগ হ’ব পাৰে।

- **Best Case:** algorithm-ৰ বাবে আটাইতকৈ সুবিধাজনক input।
- **Average Case:** নিৰ্দিষ্ট input distribution-ৰ অধীনত গড় আচৰণ।
- **Worst Case:** আটাইতকৈ বেয়া input-ত সৰ্বাধিক কাম।

উদাহৰণস্বৰূপে, Linear Search-ত প্ৰথম element-তেই মান পালে best case O(1), শেষত পালে বা নাপালে worst case O(n)। Big-O আলোচনা কৰোঁতে কোন case-ৰ কথা কৈছোঁ সেয়া স্পষ্ট কৰা ভাল।

## ১০.৪ Space Complexity

Space complexity-এ algorithm-ৰ memory ব্যৱহাৰ বুজায়। কিছুমান আলোচনাত input store কৰিবলৈ লাগা memory-ও ধৰা হয়; আন কিছুমানত কেৱল **auxiliary space** অৰ্থাৎ input-ৰ বাহিৰে algorithm-এ অতিৰিক্তভাৱে ব্যৱহাৰ কৰা memory গণনা কৰা হয়। সেয়ে কোনটো space measure কৰা হৈছে সেয়া উল্লেখ কৰা উচিত।

উদাহৰণ:
- কিছুমান iterative algorithm-এ কেৱল কেইটামান variable ব্যৱহাৰ কৰে: auxiliary space O(1)।
- নতুন list বনাই প্ৰতিটো input element তাত ৰাখিলে auxiliary space O(n) হ’ব পাৰে।
- Recursive function-ত call stack-ৰ memory-ও space complexity-ত গণনা কৰিব লাগে।

## ১০.৫ Merge Sort (মাৰ্জ ছৰ্ট)

Merge Sort হৈছে Divide and Conquer algorithm। ই তালিকাখন সৰু সৰু ভাগত ভাগ কৰে, প্ৰতিটো ভাগ sort কৰে আৰু শেষত sorted ভাগসমূহ merge কৰে।

ধাপসমূহ:
1. তালিকাখন প্ৰায় সমান দুটা ভাগত বিভক্ত কৰা।
2. প্ৰতিটো ভাগ recursive ভাৱে sort কৰা।
3. দুটা sorted ভাগ একেলগ কৰি এটা sorted তালিকা বনোৱা।

### Python Implementation

\`\`\`python
def মাৰ্জ(বাওঁ, সোঁ):
    ফল = []
    i = j = 0

    while i < len(বাওঁ) and j < len(সোঁ):
        if বাওঁ[i] <= সোঁ[j]:
            ফল.append(বাওঁ[i])
            i += 1
        else:
            ফল.append(সোঁ[j])
            j += 1

    ফল.extend(বাওঁ[i:])
    ফল.extend(সোঁ[j:])
    return ফল


def মাৰ্জ_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা.copy()

    মধ্য = len(তালিকা) // 2
    বাওঁ = মাৰ্জ_ছৰ্ট(তালিকা[:মধ্য])
    সোঁ = মাৰ্জ_ছৰ্ট(তালিকা[মধ্য:])

    return মাৰ্জ(বাওঁ, সোঁ)


সংখ্যা = [38, 27, 43, 3, 9, 82, 10, 55, 19]
print(মাৰ্জ_ছৰ্ট(সংখ্যা))
print(সংখ্যা)  # মূল তালিকা অপৰিৱৰ্তিত
\`\`\`

এই implementation-এ নতুন list ঘূৰাই দিয়ে আৰু মূল তালিকা সলনি নকৰে। \`<=\` ব্যৱহাৰ কৰাৰ বাবে সমান মান থকা element-ৰ আপেক্ষিক ক্ৰম অক্ষুণ্ণ থাকে; অৰ্থাৎ এই Merge Sort stable।

### Merge Sort-ৰ Complexity

- Best, Average আৰু Worst Time: O(n log n)।
- Auxiliary Space: সাধাৰণ array/list implementation-ত O(n)।
- Recursive call stack: O(log n) গভীৰতা।

Python-ৰ slice-এ নতুন list সৃষ্টি কৰে। সেইবাবে এই শিক্ষামূলক implementation-ত অতিৰিক্ত allocation হয়। তথাপিও সামগ্ৰিক auxiliary space O(n)-ৰ ভিতৰত থাকে।

## ১০.৬ Quick Sort (কুইক ছৰ্ট)

Quick Sort-ও Divide and Conquer algorithm। ই এটা pivot বাছি element-সমূহক pivot-তকৈ সৰু, সমান আৰু ডাঙৰ ভাগত বিভক্ত কৰে আৰু ভাগসমূহ sort কৰে।

Quick Sort-ৰ performance pivot বাছনি আৰু input-ৰ ওপৰত নিৰ্ভৰ কৰে:
- Average Time: O(n log n)।
- Worst Time: O(n²)।
- Recursive stack: average-ত O(log n), worst case-ত O(n) হ’ব পাৰে।

### সহজ শিক্ষামূলক Python Implementation

\`\`\`python
def কুইক_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা.copy()

    পিভট = তালিকা[len(তালিকা) // 2]
    কম = [x for x in তালিকা if x < পিভট]
    সমান = [x for x in তালিকা if x == পিভট]
    বেছি = [x for x in তালিকা if x > পিভট]

    return (
        কুইক_ছৰ্ট(কম)
        + সমান
        + কুইক_ছৰ্ট(বেছি)
    )


সংখ্যা = [64, 34, 25, 12, 22, 11, 90, 25]
print(কুইক_ছৰ্ট(সংখ্যা))
print(সংখ্যা)  # মূল তালিকা অপৰিৱৰ্তিত
\`\`\`

এইটো সহজে বুজিব পৰা functional-style উদাহৰণ; ই প্ৰতিটো recursion-ত নতুন list সৃষ্টি কৰে। ইয়াক in-place Quick Sort বুলি ক’ব নোৱাৰি। ইয়াত pivot-ৰ সমান সকলো element \`সমান\` ভাগত ৰখা হৈছে, যাৰ ফলত duplicate value সঠিকভাৱে handle হয়।

**গুৰুত্বপূৰ্ণ:** এই implementation-ত pivot সদায় মধ্যৰ index-ৰ element। কিছুমান input-ত ভাগসমূহ অসমান হ’ব পাৰে আৰু worst-case O(n²) হ’ব পাৰে। Random pivot বা median-of-three pivot-এ বহু ক্ষেত্ৰত ভাল আচৰণ দিব পাৰে, কিন্তু worst-case guarantee নিজে নিজে আঁতৰাই নিদিয়ে।

## ১০.৭ Binary Search (বাইনাৰী ছাৰ্চ)

Binary Search-এ প্ৰতিটো ধাপত search space প্ৰায় আধা কৰি দিয়ে। কিন্তু ইয়াৰ বাবে data আগতেই sorted হ’ব লাগিব। Unsorted তালিকাত এই algorithm পোনপটীয়াকৈ ব্যৱহাৰ কৰিব নোৱাৰি।

### Iterative Binary Search

\`\`\`python
def বাইনাৰী_ছাৰ্চ(তালিকা, লক্ষ্য):
    বাওঁ = 0
    সোঁ = len(তালিকা) - 1

    while বাওঁ <= সোঁ:
        মধ্য = (বাওঁ + সোঁ) // 2

        if তালিকা[মধ্য] == লক্ষ্য:
            return মধ্য
        elif তালিকা[মধ্য] < লক্ষ্য:
            বাওঁ = মধ্য + 1
        else:
            সোঁ = মধ্য - 1

    return -1


সংখ্যা = [3, 9, 10, 19, 27, 38, 43, 55, 82]
print(বাইনাৰী_ছাৰ্চ(সংখ্যা, 38))  # 5
print(বাইনাৰী_ছাৰ্চ(সংখ্যা, 7))   # -1
\`\`\`

এই function-এ মান পালে index ঘূৰাই দিয়ে, নাপালে -1 দিয়ে। Duplicate value থাকিলে কোনটো matching index ঘূৰাই দিব তাৰ নিশ্চয়তা এই implementation-এ নিদিয়ে; প্ৰথম বা শেষ occurrence বিচাৰিবলৈ পৃথক variant লাগে।

### Binary Search-ৰ Complexity

- Time: O(log n)।
- Auxiliary Space: O(1)।
- প্ৰয়োজনীয় চৰ্ত: input sorted আৰু index-ৰে access কৰিব পৰা sequence।

## ১০.৮ তিনিটা Algorithm-ৰ তুলনা

| Algorithm | Best Time | Average Time | Worst Time | Auxiliary Space (সাধাৰণ implementation) |
|---|---:|---:|---:|---:|
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | Average O(log n), worst O(n) stack; এই সহজ version-ত list allocation-ও হয় |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) iterative |

এই তুলনাত Binary Search হৈছে search algorithm, sorting algorithm নহয়। ইয়াৰ input sorted হ’ব লাগিব।

## ১০.৯ Python-ত বাস্তৱিক Sorting

শিক্ষাৰ বাবে Merge Sort আৰু Quick Sort বুজা উপযোগী। কিন্তু বাস্তৱ Python program-ত সাধাৰণতে built-in \`sorted()\` বা list-ৰ \`sort()\` ব্যৱহাৰ কৰাই ভাল। Python-ৰ sorting Timsort algorithm-ৰ ওপৰত ভিত্তি কৰি নিৰ্মিত আৰু ই stable।

\`\`\`python
সংখ্যা = [5, 2, 9, 1, 5, 6]

নতুন_তালিকা = sorted(সংখ্যা)
print(নতুন_তালিকা)  # [1, 2, 5, 5, 6, 9]
print(সংখ্যা)       # [5, 2, 9, 1, 5, 6]

সংখ্যা.sort(reverse=True)
print(সংখ্যা)       # [9, 6, 5, 5, 2, 1]
\`\`\`

\`sorted()\`-এ নতুন list ঘূৰাই দিয়ে; \`list.sort()\`-এ একেটা list in-place সজায় আৰু \`None\` ঘূৰাই দিয়ে।

## ১০.১০ সাধাৰণ ভুল আৰু সাৱধানতা

1. Binary Search-ত sorted নহোৱা data ব্যৱহাৰ নকৰিব।
2. Binary Search-ত \`বাওঁ <= সোঁ\` চৰ্তটো ভুলকৈ লিখিলে শেষৰ candidate বাদ পৰিব পাৰে।
3. Merge Sort-ত merge কৰাৰ সময় দুয়োটা ভাগৰ বাকী element যোগ কৰিবলৈ নাপাহৰিব।
4. Quick Sort-ত duplicate value সঠিকভাৱে handle নকৰিলে ভুল ফলাফল হ’ব পাৰে।
5. Quick Sort-ৰ average O(n log n), কিন্তু worst-case O(n²)—দুয়োটা তথ্য মনত ৰাখিব।
6. Big-O মানে নিৰ্দিষ্ট runtime নহয়; ই বৃদ্ধিৰ ধৰণ।
7. Space complexity আলোচনা কৰোঁতে auxiliary space আৰু recursion stack উল্লেখ কৰক।
8. Python-ত list slicing-এ নতুন list সৃষ্টি কৰে; ইয়াৰ memory খৰচ আছে।

## ১০.১১ অনুশীলনী

1. Big-O notation-এ কি বুজায়?
2. \(4n^2 + 3n + 8\)-ৰ Big-O কি?
3. O(1) আৰু O(n)-ৰ মাজত পাৰ্থক্য লিখক।
4. Time complexity আৰু space complexity কি?
5. Best case, average case আৰু worst case বুজাওক।
6. Merge Sort কোন algorithmic technique ব্যৱহাৰ কৰে?
7. Merge Sort-ৰ worst-case time complexity কিমান?
8. Merge Sort-ৰ auxiliary space সাধাৰণতে O(n) কিয়?
9. Quick Sort-ৰ worst-case time complexity কিমান?
10. Quick Sort-ত pivot-ৰ কাম কি?
11. Binary Search ব্যৱহাৰ কৰাৰ আগতে data কেনে হ’ব লাগে?
12. Binary Search-ৰ iterative version-ৰ auxiliary space কিমান?
13. \`sorted()\` আৰু \`list.sort()\`-ৰ পাৰ্থক্য কি?
14. Duplicate value থকা Quick Sort-ত equal partition কিয় সহায়ক?

### উত্তৰ-সূচী

1. Input size বৃদ্ধি হ’লে algorithm-ৰ growth rate-ৰ upper-bound বৰ্ণনা।
2. O(n²)।
3. O(1)-ৰ কাম input size-ৰ ওপৰত নিৰ্ভৰ নকৰে; O(n)-ৰ কাম প্ৰায় linear ভাৱে বৃদ্ধি পায়।
4. Time complexity operation-ৰ বৃদ্ধি; space complexity memory-ৰ বৃদ্ধি।
5. আটাইতকৈ সুবিধাজনক, গড়, আৰু আটাইতকৈ বেয়া input-ৰ আচৰণ।
6. Divide and Conquer।
7. O(n log n)।
8. Merge কৰিবলৈ element-সমূহ অতিৰিক্ত list-ত ৰখা হয়।
9. O(n²)।
10. তালিকাখন সৰু/সমান/ডাঙৰ ভাগত বিভক্ত কৰাৰ reference value।
11. Sorted।
12. O(1)।
13. \`sorted()\` নতুন list ঘূৰাই দিয়ে; \`list.sort()\` একেটা list সজায় আৰু \`None\` ঘূৰাই দিয়ে।
14. একে মানৰ element-সমূহ একে ভাগত ৰাখি অপ্রয়োজনীয় recursive partition কমাব পাৰে।

## ১০.১২ সাৰাংশ

এই অধ্যায়ত Time আৰু Space Complexity, Big-O, best/average/worst case, Merge Sort, Quick Sort আৰু Binary Search শিকিলোঁ। Merge Sort-ৰ worst-case O(n log n), Quick Sort-ৰ average O(n log n) কিন্তু worst O(n²), আৰু Binary Search-ৰ বাবে sorted data প্ৰয়োজন। বাস্তৱ Python program-ত built-in sorting function ব্যৱহাৰ কৰাটো সাধাৰণতে উত্তম।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Built-in Functions — sorted(): https://docs.python.org/3/library/functions.html#sorted
- Python List Methods — sort(): https://docs.python.org/3/tutorial/datastructures.html
- Python bisect — Array bisection algorithm: https://docs.python.org/3/library/bisect.html
- Python Wiki — Time Complexity: https://wiki.python.org/moin/TimeComplexity
\`,
    },
    id: 'ch-11',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১১: OOP-ৰ স্তম্ভ আৰু ডেটা মডেলিং',
      subtitle: 'Class, Object, Encapsulation, Inheritance, Polymorphism আৰু Abstract Base Class',
      estimatedReadTime: '25 min',
      topics: ['Class and Object', 'Constructor and Instance Attributes', 'Encapsulation', 'Properties', 'Inheritance and super()', 'Abstraction and ABC', 'Polymorphism', 'Bank Account Model', 'Testing and Common Errors'],
      content: \`## ১১.১ Object-Oriented Programming (OOP) কি?

Object-Oriented Programming বা OOP হৈছে program-ৰ data আৰু সেই data-ৰ ওপৰত কাম কৰা method-সমূহক object-ৰ ৰূপত সংগঠিত কৰাৰ এটা পদ্ধতি। Python-ত প্ৰায় সকলো data-ই object; নিজৰ class-ও সৃষ্টি কৰিব পাৰি।

OOP-ৰ মূল শব্দসমূহ:

- **Class:** object সৃষ্টি কৰাৰ নক্সা বা blueprint।
- **Object:** class-ৰ পৰা সৃষ্টি হোৱা বাস্তৱ instance।
- **Attribute:** object বা class-ৰ সৈতে জড়িত data।
- **Method:** class-ৰ ভিতৰত সংজ্ঞায়িত function।
- **Constructor:** object সৃষ্টি হওঁতে চলা initialization পদ্ধতি; Python-ত সাধাৰণতে \`__init__()\` ব্যৱহাৰ কৰা হয়।

### প্ৰথম Class আৰু Object

\`\`\`python
class ছাত্ৰ:
    def __init__(self, নাম, শ্ৰেণী):
        self.নাম = নাম
        self.শ্ৰেণী = শ্ৰেণী

    def পৰিচয়(self):
        return f"মোৰ নাম {self.নাম}; মই {self.শ্ৰেণী} শ্ৰেণীত পঢ়োঁ।"


ছাত্ৰ১ = ছাত্ৰ("ৰিমা", 10)
ছাত্ৰ২ = ছাত্ৰ("জয়", 9)

print(ছাত্ৰ১.পৰিচয়())
print(ছাত্ৰ২.পৰিচয়())
\`\`\`

ইয়াত \`ছাত্ৰ\` হৈছে class আৰু \`ছাত্ৰ১\`, \`ছাত্ৰ২\` হৈছে পৃথক object। \`self\`-এ method-টো যি object-ৰ বাবে চলিছে তাক বুজায়। Object method কল কৰোঁতে Python-এ \`self\` স্বয়ংক্ৰিয়ভাৱে পঠিয়ায়।

## ১১.২ Instance Attribute আৰু Class Attribute

Instance attribute প্ৰতিটো object-ৰ নিজা হয়। Class attribute class-ৰ সৈতে জড়িত আৰু সাধাৰণতে সকলো instance-এ share কৰে।

\`\`\`python
class কৰ্মচাৰী:
    প্ৰতিষ্ঠান = "অসম টেক"

    def __init__(self, নাম):
        self.নাম = নাম


ক১ = কৰ্মচাৰী("মীনা")
ক২ = কৰ্মচাৰী("ৰাহুল")

print(ক১.নাম, ক২.নাম)
print(ক১.প্ৰতিষ্ঠান, ক২.প্ৰতিষ্ঠান)
\`\`\`

Mutable class attribute যেনে list-ত সাৱধান হ’ব লাগে। প্ৰতিটো object-ৰ নিজা list লাগিলে সেই list \`__init__()\`-ৰ ভিতৰত সৃষ্টি কৰক।

## ১১.৩ Encapsulation (এনকেপচুলেচন)

Encapsulation-ৰ অৰ্থ হৈছে object-ৰ internal state আৰু সেই state সলনি কৰাৰ নিয়ম একেলগে সংগঠিত কৰা। ইয়াৰ ফলত ভুল বা অবৈধ মান set হোৱাৰ সম্ভাৱনা কমে।

Python-ত নামৰ convention:
- \`name\`: সাধাৰণ public attribute।
- \`_name\`: internal/protected বুলি convention-এ সূচায়; ই কঠোৰ access restriction নহয়।
- \`__name\`: name mangling কৰে; ইও সম্পূৰ্ণ security বা private access control নহয়।

### Property-ৰ সহায়ত নিয়ন্ত্ৰিত Access

\`\`\`python
class তাপমাত্ৰা:
    def __init__(self, celsius):
        self.celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, মান):
        if not isinstance(মান, (int, float)):
            raise TypeError("তাপমাত্ৰা সংখ্যা হ'ব লাগিব")
        self._celsius = float(মান)

    @property
    def fahrenheit(self):
        return self._celsius * 9 / 5 + 32


t = তাপমাত্ৰা(25)
print(t.celsius)
print(t.fahrenheit)
t.celsius = 30
\`\`\`

Property-এ attribute-ৰ দৰে syntax ৰাখি getter/setter-ৰ ভিতৰত validation বা calculation কৰিব দিয়ে। ওপৰৰ উদাহৰণত Celsius value-ৰ বাবে type check আছে; বাস্তৱ scientific application-ত NaN আৰু infinity-ৰ দৰে মানো পৃথকভাৱে reject কৰিব লাগিব।

## ১১.৪ Inheritance (ইনহেৰিটেঞ্চ)

Inheritance-এ এটা class-এ আন এটা class-ৰ বৈশিষ্ট্য আৰু method পুনৰ ব্যৱহাৰ কৰিব দিয়ে।

- **Parent/Base class:** যাৰ পৰা বৈশিষ্ট্য লোৱা হয়।
- **Child/Derived class:** যিয়ে parent class-ৰ পৰা inherit কৰে।
- **super():** parent class-ৰ implementation-লৈ access কৰাৰ সুবিধাজনক উপায়।

\`\`\`python
class ব্যক্তি:
    def __init__(self, নাম):
        self.নাম = নাম

    def পৰিচয়(self):
        return f"মোৰ নাম {self.নাম}"


class শিক্ষক(ব্যক্তি):
    def __init__(self, নাম, বিষয়):
        super().__init__(নাম)
        self.বিষয় = বিষয়

    def পাঠদান(self):
        return f"{self.বিষয়} বিষয় পঢ়াওঁ"


t = শিক্ষক("অনিতা", "গণিত")
print(t.পৰিচয়())
print(t.পাঠদান())
\`\`\`

Inheritance কেৱল code reuse-ৰ বাবে ব্যৱহাৰ নকৰিব। Child class-টো conceptually parent class-ৰ বিশেষ ৰূপ হ’লেহে inheritance উপযুক্ত। অন্যথা composition ব্যৱহাৰ কৰাটো অধিক সহজ হ’ব পাৰে।

## ১১.৫ Polymorphism (পলিমৰ্ফিজম)

Polymorphism-ৰ অৰ্থ হৈছে একে interface বা method name-ৰ জৰিয়তে বিভিন্ন object-ৰ নিজস্ব আচৰণ পোৱা।

\`\`\`python
class কুকুৰ:
    def শব্দ(self):
        return "ভৌ ভৌ"


class মেকুৰী:
    def শব্দ(self):
        return "মিউ মিউ"


def শব্দ_শুনা(প্ৰাণী):
    print(প্ৰাণী.শব্দ())


শব্দ_শুনা(কুকুৰ())
শব্দ_শুনা(মেকুৰী())
\`\`\`

\`শব্দ_শুনা()\` function-এ object-টো কুকুৰ নে মেকুৰী সেয়া জানিব নালাগে; কেৱল object-টোৰ \`শব্দ()\` method থাকিলেই হয়। Python-ৰ এই আচৰণ duck typing-ৰ এটা উদাহৰণ।

## ১১.৬ Abstraction আৰু Abstract Base Class (ABC)

Abstraction-এ ব্যৱহাৰকাৰীক প্ৰয়োজনীয় interface দেখুৱায় আৰু implementation-ৰ detail আঁৰত ৰাখে। Python-ৰ \`abc\` module-এ Abstract Base Class সৃষ্টি কৰিবলৈ দিয়ে।

- Abstract class-ৰ object পোনপটীয়াকৈ সৃষ্টি কৰিব নোৱাৰি।
- Abstract method-ৰ implementation concrete child class-এ দিব লাগে।
- ABC-এ class-সমূহে নিৰ্দিষ্ট interface মানি চলিছে নে নাই পৰীক্ষাত সহায় কৰে।

\`\`\`python
from abc import ABC, abstractmethod


class আকৃতি(ABC):
    @abstractmethod
    def ক্ষেত্ৰফল(self):
        pass


class আয়তক্ষেত্ৰ(আকৃতি):
    def __init__(self, দৈৰ্ঘ্য, প্ৰস্থ):
        if দৈৰ্ঘ্য <= 0 or প্ৰস্থ <= 0:
            raise ValueError("দৈৰ্ঘ্য আৰু প্ৰস্থ ধনাত্মক হ'ব লাগে")
        self.দৈৰ্ঘ্য = দৈৰ্ঘ্য
        self.প্ৰস্থ = প্ৰস্থ

    def ক্ষেত্ৰফল(self):
        return self.দৈৰ্ঘ্য * self.প্ৰস্থ


a = আয়তক্ষেত্ৰ(8, 5)
print(a.ক্ষেত্ৰফল())  # 40
\`\`\`

যদি child class-এ \`ক্ষেত্ৰফল()\` implement নকৰে, তেন্তে সেই child class-ৰ object সৃষ্টি কৰোঁতে Python-এ \`TypeError\` দিব।

## ১১.৭ বাস্তৱ উদাহৰণ: সৰল Bank Account Model

এই উদাহৰণটো OOP-ৰ শিক্ষামূলক model। ই বাস্তৱ বেংকিং system নহয়। বাস্তৱ financial system-ত authentication, authorization, database transaction, audit log, concurrency, regulatory control আৰু security review প্ৰয়োজন।

টকাৰ হিচাপত binary floating-point-ৰ rounding সমস্যা হ’ব পাৰে। সেয়ে তলৰ উদাহৰণত \`Decimal\` ব্যৱহাৰ কৰা হৈছে।

\`\`\`python
from abc import ABC, abstractmethod
from decimal import Decimal
from datetime import datetime, timezone


class একাউণ্ট(ABC):
    def __init__(self, নাম: str, প্ৰাৰম্ভিক_ধন, একাউণ্ট_নম্বৰ: str):
        if not নাম.strip():
            raise ValueError("নাম খালী হ'ব নোৱাৰে")
        if not একাউণ্ট_নম্বৰ.strip():
            raise ValueError("একাউণ্ট নম্বৰ খালী হ'ব নোৱাৰে")

        self.নাম = নাম
        self.__একাউণ্ট_নম্বৰ = একাউণ্ট_নম্বৰ
        self._বেলেঞ্চ = self._ধনলৈ(প্ৰাৰম্ভিক_ধন)

        if self._বেলেঞ্চ < 0:
            raise ValueError("প্ৰাৰম্ভিক বেলেঞ্চ ঋণাত্মক হ'ব নোৱাৰে")

        self._লেনদেন = []

    @staticmethod
    def _ধনলৈ(মান):
        try:
            ধন = Decimal(str(মান))
        except Exception as exc:
            raise ValueError("সঠিক ধনৰাশি দিয়ক") from exc

        if not ধন.is_finite():
            raise ValueError("ধনৰাশি finite হ'ব লাগিব")
        return ধন.quantize(Decimal("0.01"))

    @property
    def বেলেঞ্চ(self) -> Decimal:
        return self._বেলেঞ্চ

    @property
    def একাউণ্ট_নম্বৰ(self) -> str:
        return self.__একাউণ্ট_নম্বৰ

    def জমা(self, পৰিমাণ):
        ধন = self._ধনলৈ(পৰিমাণ)
        if ধন <= 0:
            raise ValueError("জমাৰ পৰিমাণ শূন্যতকৈ ডাঙৰ হ'ব লাগে")

        self._বেলেঞ্চ += ধন
        self._ৰেকৰ্ড("জমা", ধন)
        return self._বেলেঞ্চ

    def উলিওৱা(self, পৰিমাণ):
        ধন = self._ধনলৈ(পৰিমাণ)
        if ধন <= 0:
            raise ValueError("উলিওৱাৰ পৰিমাণ শূন্যতকৈ ডাঙৰ হ'ব লাগে")
        if ধন > self._বেলেঞ্চ:
            raise ValueError("অপৰ্যাপ্ত বেলেঞ্চ")

        self._বেলেঞ্চ -= ধন
        self._ৰেকৰ্ড("উলিওৱা", -ধন)
        return self._বেলেঞ্চ

    def _ৰেকৰ্ড(self, ধৰণ, পৰিমাণ):
        self._লেনদেন.append({
            "সময়": datetime.now(timezone.utc),
            "ধৰণ": ধৰণ,
            "পৰিমাণ": পৰিমাণ,
            "বেলেঞ্চ": self._বেলেঞ্চ,
        })

    @abstractmethod
    def সুত_গণনা(self) -> Decimal:
        pass


class সঞ্চয়_একাউণ্ট(একাউণ্ট):
    def __init__(self, নাম, প্ৰাৰম্ভিক_ধন, একাউণ্ট_নম্বৰ, সুত_হাৰ="0.05"):
        super().__init__(নাম, প্ৰাৰম্ভিক_ধন, একাউণ্ট_নম্বৰ)
        self.সুত_হাৰ = Decimal(str(সুত_হাৰ))

        if not self.সুত_হাৰ.is_finite() or self.সুত_হাৰ < 0:
            raise ValueError("সুতৰ হাৰ বৈধ হ'ব লাগিব")

    def সুত_গণনা(self) -> Decimal:
        return (self.বেলেঞ্চ * self.সুত_হাৰ).quantize(
            Decimal("0.01")
        )


class চলিত_একাউণ্ট(একাউণ্ট):
    def সুত_গণনা(self) -> Decimal:
        return Decimal("0.00")


a1 = সঞ্চয়_একাউণ্ট("ৰিমা", "50000.00", "SB-001")
a2 = চলিত_একাউণ্ট("জয়", "20000.00", "CA-002")

a1.জমা("1500.50")
a2.উলিওৱা("500")

for a in (a1, a2):
    print(a.নাম, a.বেলেঞ্চ, a.সুত_গণনা())
\`\`\`

### উদাহৰণটোৰ ব্যাখ্যা

1. \`একাউণ্ট\` হৈছে abstract base class।
2. \`সঞ্চয়_একাউণ্ট\` আৰু \`চলিত_একাউণ্ট\` হৈছে child class।
3. \`__একাউণ্ট_নম্বৰ\` name mangling-সহ internal attribute; ই security boundary নহয়।
4. \`বেলেঞ্চ\` property-ত কেৱল getter আছে, সেয়ে বাহিৰৰ code-এ \`a1.বেলেঞ্চ = ...\` কৰি সহজে balance সলনি কৰিব নোৱাৰে।
5. জমা আৰু উলিওৱাৰ আগতে ধনৰাশি validate কৰা হয়।
6. দুয়োটা child class-এ \`সুত_গণনা()\` নিজস্বভাৱে implement কৰিছে—এইটো polymorphism।
7. সময় UTC-ত record কৰা হৈছে। এই সৰু উদাহৰণত transaction list memory-ত থাকে; program বন্ধ হ’লে স্থায়ীভাৱে সংৰক্ষিত নাথাকে।

ইয়াত সুতৰ গণনা কেৱল সৰল বাৰ্ষিক হাৰৰ উদাহৰণ; বাস্তৱ বেংকৰ সুত গণনাৰ নিয়ম, সময়কাল, rounding আৰু কৰৰ নিয়ম ইয়াত অন্তৰ্ভুক্ত নহয়।

## ১১.৮ OOP-ৰ চাৰিটা বহুল আলোচিত স্তম্ভ

| স্তম্ভ | অৰ্থ | এই অধ্যায়ৰ উদাহৰণ |
|---|---|---|
| Encapsulation | State আৰু নিয়ম একেলগে ৰখা | Property আৰু balance validation |
| Abstraction | প্ৰয়োজনীয় interface দেখুওৱা | Abstract Account class |
| Inheritance | Parent class-ৰ বৈশিষ্ট্য পুনৰ ব্যৱহাৰ | Savings Account |
| Polymorphism | একে interface-ত বিভিন্ন আচৰণ | সুত_গণনা() |

এই চাৰিটা শব্দ OOP শিকিবলৈ সহায়ক mental model; সকলো programming language-এ একে ধৰণে implement নকৰে।

## ১১.৯ সাধাৰণ ভুল আৰু সাৱধানতা

1. \`self\` বাদ দিলে instance method-ৰ parameter সমস্যা হ’ব পাৰে।
2. Class attribute আৰু instance attribute একে বুলি নাভাবিব।
3. \`_name\` Python-ত কঠোৰ private access control নহয়।
4. \`__name\`-ৰ name mangling-কে encryption বা security বুলি নাভাবিব।
5. Mutable class attribute-ত সকলো object-এ একে list share কৰিব পাৰে।
6. Child class-ৰ constructor-ত parent initialization লাগিলে \`super().__init__()\` ব্যৱহাৰ কৰক।
7. Abstract method implement নকৰাকৈ concrete object সৃষ্টি কৰিব নোৱাৰি।
8. Inheritance-ৰ সলনি composition অধিক উপযুক্ত হ’ব পাৰে।
9. টকাৰ হিচাপত সাধাৰণ float-ৰ rounding আচৰণৰ বিষয়ে সচেতন থাকক।
10. শিক্ষামূলক bank model-ক বাস্তৱ financial software বুলি ব্যৱহাৰ নকৰিব।

## ১১.১০ অনুশীলনী

1. Class আৰু Object-ৰ মাজত পাৰ্থক্য কি?
2. \`self\`-এ কি বুজায়?
3. \`__init__()\` কেতিয়া চলে?
4. Instance attribute আৰু class attribute-ৰ পাৰ্থক্য লিখক।
5. Encapsulation-ৰ এটা সুবিধা লিখক।
6. Python-ত \`_name\` আৰু \`__name\`-ৰ পাৰ্থক্য কি?
7. Property-ৰ ব্যৱহাৰ কিয় কৰা হয়?
8. Inheritance আৰু \`super()\`-ৰ কাম কি?
9. Polymorphism বুজাবলৈ এটা উদাহৰণ দিয়ক।
10. Abstract Base Class-ৰ object পোনপটীয়াকৈ সৃষ্টি কৰিব পাৰিনে?
11. Abstract method implement নকৰা child class-ৰ object সৃষ্টি কৰিলে কি হ’ব?
12. Bank Account উদাহৰণত float-ৰ সলনি Decimal কিয় ব্যৱহাৰ কৰা হৈছে?
13. Inheritance-ৰ সলনি composition কেতিয়া ভাল হ’ব পাৰে?
14. \`সঞ্চয়_একাউণ্ট\` আৰু \`চলিত_একাউণ্ট\`-এ একে \`সুত_গণনা()\` method কেনেকৈ বেলেগ ফল দিয়ে?

### উত্তৰ-সূচী

1. Class হৈছে blueprint; object হৈছে তাৰ instance।
2. বৰ্তমান method-টো যি instance-ৰ বাবে চলিছে তাক বুজায়।
3. নতুন object initialize কৰোঁতে।
4. Instance attribute প্ৰতিটো object-ৰ নিজা; class attribute class-ৰ সৈতে share হয়।
5. Internal state সলনি কৰাৰ নিয়ম নিয়ন্ত্ৰণ কৰিব পাৰে।
6. Single underscore convention; double underscore name mangling কৰে।
7. Attribute-ৰ দৰে access ৰাখি validation বা computed value দিবলৈ।
8. Inheritance-এ parent-ৰ বৈশিষ্ট্য দিয়ে; \`super()\`-এ parent implementation কল কৰাত সহায় কৰে।
9. একে method name-এ বিভিন্ন object-ত বিভিন্ন আচৰণ কৰা।
10. নোৱাৰে।
11. Abstract method অসম্পূৰ্ণ থাকিলে object সৃষ্টি কৰোঁতে TypeError হয়।
12. Decimal-এ দশমিক ধনৰাশিৰ বাবে অধিক উপযুক্ত decimal arithmetic দিয়ে।
13. যেতিয়া এটা class-ৰ ভিতৰত আন object-ৰ সুবিধা ব্যৱহাৰ কৰিলেই হয়, কিন্তু parent-child সম্পৰ্ক স্বাভাৱিক নহয়।
14. প্ৰতিটো child class-এ নিজৰ implementation দিছে।

## ১১.১১ সাৰাংশ

এই অধ্যায়ত Class, Object, Attribute, Method, Encapsulation, Property, Inheritance, Abstraction আৰু Polymorphism শিকিলোঁ। OOP-এ ডাঙৰ program-ৰ data আৰু আচৰণ সংগঠিত কৰাত সহায় কৰে। ভাল design-ৰ বাবে class-ৰ দায়িত্ব স্পষ্ট, validation সঠিক আৰু inheritance-ৰ ব্যৱহাৰ যুক্তিসংগত হোৱা উচিত।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Classes Tutorial: https://docs.python.org/3/tutorial/classes.html
- Python Data Model: https://docs.python.org/3/reference/datamodel.html
- Python abc — Abstract Base Classes: https://docs.python.org/3/library/abc.html
- Python decimal — Decimal arithmetic: https://docs.python.org/3/library/decimal.html
\`,
    },
    id: 'ch-12',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১২: SOLID নীতি আৰু ডিজাইন পেটাৰ্ণ',
      subtitle: 'Clean Architecture, Strategy Pattern, Factory Pattern আৰু Dependency Injection',
      estimatedReadTime: '30 min',
      topics: ['SOLID Principles', 'Single Responsibility', 'Open-Closed', 'Liskov Substitution', 'Interface Segregation', 'Dependency Inversion', 'Strategy Pattern', 'Factory Pattern', 'Dependency Injection', 'Testing and Trade-offs'],
      content: \`## ১২.১ SOLID নীতিৰ পৰিচয়

SOLID হৈছে object-oriented software design-ৰ পাঁচটা বহুল ব্যৱহৃত guideline-ৰ সংক্ষিপ্ত নাম। ইয়াৰ উদ্দেশ্য হৈছে code বুজিবলৈ সহজ, পৰীক্ষা কৰিবলৈ সুবিধাজনক আৰু পৰিৱৰ্তন কৰিবলৈ তুলনামূলকভাৱে সহজ কৰা। এইবোৰ কঠোৰ আইন নহয়; project-ৰ আকাৰ আৰু প্ৰয়োজন অনুসৰি বিচাৰ-বিবেচনাৰে প্ৰয়োগ কৰিব লাগে।

পাঁচটা নীতি:
- **S — Single Responsibility Principle (SRP)**
- **O — Open/Closed Principle (OCP)**
- **L — Liskov Substitution Principle (LSP)**
- **I — Interface Segregation Principle (ISP)**
- **D — Dependency Inversion Principle (DIP)**

## ১২.২ S — Single Responsibility Principle

এটা class বা module-ৰ পৰিৱৰ্তনৰ বাবে এটা স্পষ্ট মুখ্য কাৰণ থাকিব লাগে। অৰ্থাৎ একে class-এ একেলগে বহুতো সম্পৰ্কহীন দায়িত্ব ল’ব নালাগে।

### সমস্যা থকা উদাহৰণ

\`\`\`python
class প্ৰতিবেদন:
    def গণনা(self, বিক্ৰী):
        return sum(বিক্ৰী)

    def ফাইলত_লিখা(self, ফলাফল, পথ):
        with open(পথ, "w", encoding="utf-8") as ফাইল:
            ফাইল.write(str(ফলাফল))
\`\`\`

ইয়াত গণনা আৰু file storage—দুটা পৃথক দায়িত্ব একেটা class-ত আছে।

### উন্নত বিভাজন

\`\`\`python
class বিক্ৰী_বিশ্লেষক:
    def মুঠ(self, বিক্ৰী):
        return sum(বিক্ৰী)


class প্ৰতিবেদন_সংৰক্ষক:
    def সংৰক্ষণ(self, ফলাফল, পথ):
        with open(পথ, "w", encoding="utf-8") as ফাইল:
            ফাইল.write(str(ফলাফল))


বিক্ৰী = [100, 250, 300]
বিশ্লেষক = বিক্ৰী_বিশ্লেষক()
সংৰক্ষক = প্ৰতিবেদন_সংৰক্ষক()

মুঠ = বিশ্লেষক.মুঠ(বিক্ৰী)
সংৰক্ষক.সংৰক্ষণ(মুঠ, "report.txt")
\`\`\`

এতিয়া গণনাৰ নিয়ম সলনি কৰিলেও file storage class-ত পৰিৱৰ্তন কৰাৰ প্ৰয়োজন নাই।

## ১২.৩ O — Open/Closed Principle

Software entity-সমূহ নতুন আচৰণ যোগ কৰিবলৈ extensible হ’ব লাগে, কিন্তু প্ৰতিটো নতুন feature-ৰ বাবে পুৰণি, পৰীক্ষিত code বাৰে বাৰে edit কৰিবলগীয়া হ’ব নালাগে।

### Strategy-ৰ সহায়ত discount

\`\`\`python
from abc import ABC, abstractmethod


class Discount(ABC):
    @abstractmethod
    def calculate(self, amount):
        pass


class NoDiscount(Discount):
    def calculate(self, amount):
        return amount


class PercentDiscount(Discount):
    def __init__(self, percent):
        if not 0 <= percent <= 100:
            raise ValueError("শতাংশ 0 ৰ পৰা 100-ৰ ভিতৰত হ'ব লাগে")
        self.percent = percent

    def calculate(self, amount):
        return amount * (1 - self.percent / 100)


def final_price(amount, discount: Discount):
    if amount < 0:
        raise ValueError("মূল্য ঋণাত্মক হ'ব নোৱাৰে")
    return discount.calculate(amount)


print(final_price(1000, NoDiscount()))
print(final_price(1000, PercentDiscount(10)))
\`\`\`

নতুন discount policy যোগ কৰিবলৈ নতুন class লিখিব পাৰি; \`final_price()\`-ৰ মূল logic সলনি কৰাৰ প্ৰয়োজন নাই।

## ১২.৪ L — Liskov Substitution Principle

যদি কোনো function-এ base type-ৰ object আশা কৰে, তেন্তে সেই base type-ৰ উপযুক্ত subtype দিলে function-টোৰ প্ৰতিশ্ৰুতি বা আচৰণ ভংগ হ’ব নালাগে।

Child class-এ parent class-ৰ method override কৰোঁতে:
- আগৰ valid input-সমূহ অযথা reject কৰিব নালাগে।
- Parent-এ যি output/guarantee দিছিল তাক ভংগ কৰিব নালাগে।
- অপ্রত্যাশিত side effect বা নতুন exception যোগ কৰি caller-ক বিপদত পেলাব নালাগে।

### সঠিক substitution-ৰ উদাহৰণ

\`\`\`python
from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def area(self):
        pass


class Rectangle(Shape):
    def __init__(self, width, height):
        if width < 0 or height < 0:
            raise ValueError("দৈৰ্ঘ্য ঋণাত্মক হ'ব নোৱাৰে")
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height


class Square(Shape):
    def __init__(self, side):
        if side < 0:
            raise ValueError("বাহু ঋণাত্মক হ'ব নোৱাৰে")
        self.side = side

    def area(self):
        return self.side * self.side


def print_area(shape: Shape):
    print(shape.area())


print_area(Rectangle(4, 5))
print_area(Square(4))
\`\`\`

এই interface-ত দুয়োটা shape-এ \`area()\` দিয়ে। মন কৰিব: বাস্তৱ geometry-ত Square-কে mutable Rectangle-ৰ child class কৰিলে width/height সলনি কৰাৰ আচৰণত LSP সমস্যা হ’ব পাৰে। সেয়ে কেৱল গাণিতিক সম্পৰ্ক থাকিলেই inheritance উপযুক্ত নহয়।

## ১২.৫ I — Interface Segregation Principle

এটা ডাঙৰ interface-ত বহুতো method জোৰকৈ ৰাখি সকলো client-কে অপ্ৰয়োজনীয় method implement কৰিবলৈ বাধ্য নকৰিব। তাৰ সলনি সৰু, নিৰ্দিষ্ট interface ব্যৱহাৰ কৰক।

### উদাহৰণ

\`\`\`python
from abc import ABC, abstractmethod


class Printable(ABC):
    @abstractmethod
    def print_document(self):
        pass


class Scannable(ABC):
    @abstractmethod
    def scan_document(self):
        pass


class BasicPrinter(Printable):
    def print_document(self):
        print("Document printed")


class MultiFunctionPrinter(Printable, Scannable):
    def print_document(self):
        print("Document printed")

    def scan_document(self):
        print("Document scanned")
\`\`\`

BasicPrinter-এ scan method implement কৰিবলগীয়া নহ’ল। প্ৰতিটো device-এ নিজৰ প্ৰয়োজনীয় interface-হে গ্ৰহণ কৰিছে।

## ১২.৬ D — Dependency Inversion Principle

উচ্চ-স্তৰৰ business logic-এ নিম্ন-স্তৰৰ concrete implementation-ৰ ওপৰত পোনপটীয়াকৈ নিৰ্ভৰ নকৰি abstraction-ৰ ওপৰত নিৰ্ভৰ কৰা উচিত। Concrete implementation-এ সেই abstraction পূৰণ কৰিব।

### উদাহৰণ: Message Sender

\`\`\`python
from abc import ABC, abstractmethod


class MessageSender(ABC):
    @abstractmethod
    def send(self, message):
        pass


class ConsoleSender(MessageSender):
    def send(self, message):
        print(f"[Console] {message}")


class FileSender(MessageSender):
    def __init__(self, path):
        self.path = path

    def send(self, message):
        with open(self.path, "a", encoding="utf-8") as file:
            file.write(message + "\\n")


class AlertService:
    def __init__(self, sender: MessageSender):
        self.sender = sender

    def alert(self, message):
        self.sender.send(message)


service = AlertService(ConsoleSender())
service.alert("চিস্টেম আৰম্ভ হ'ল")
\`\`\`

\`AlertService\`-এ console বা file-ৰ বিষয়ে একো নাজানে। ই কেৱল \`MessageSender\` interface জানে। এইদৰে implementation সলনি কৰাটো সহজ হয়।

## ১২.৭ Strategy Pattern

Strategy Pattern-এ একে কাম কৰাৰ বিভিন্ন algorithm বা policy পৃথক class-ত ৰাখে আৰু runtime-ত উপযুক্ত strategy বাছিবলৈ দিয়ে।

উদাহৰণ: এটা shopping cart-ত payment method বেলেগ হ’ব পাৰে। তলৰ code-টো **payment simulation** মাত্ৰ। ই কোনো UPI, bank বা payment gateway-ত বাস্তৱ ধন পঠিয়াব নোৱাৰে আৰু transaction সফল হৈছে বুলি দাবী নকৰে।

\`\`\`python
from abc import ABC, abstractmethod
from decimal import Decimal


class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: Decimal) -> str:
        pass


class SimulatedUPI(PaymentStrategy):
    def __init__(self, upi_id):
        if "@" not in upi_id:
            raise ValueError("UPI ID-ৰ format সঠিক নহয়")
        self.upi_id = upi_id

    def pay(self, amount):
        return f"SIMULATION: UPI {self.upi_id}, amount ₹{amount}"


class SimulatedCash(PaymentStrategy):
    def pay(self, amount):
        return f"SIMULATION: Cash amount ₹{amount}"


class ShoppingCart:
    def __init__(self):
        self.items = []

    def add_item(self, name, price):
        value = Decimal(str(price))
        if not value.is_finite() or value < 0:
            raise ValueError("বস্তুৰ মূল্য বৈধ হ'ব লাগিব")
        self.items.append((name, value))

    def total(self):
        return sum(
            (price for _, price in self.items),
            start=Decimal("0.00")
        )

    def checkout(self, strategy: PaymentStrategy):
        if not self.items:
            raise ValueError("কাৰ্ট খালী")
        return strategy.pay(self.total())


cart = ShoppingCart()
cart.add_item("Notebook", "50.00")
cart.add_item("Pen", "15.50")

result = cart.checkout(SimulatedUPI("student@demo"))
print(result)
\`\`\`

### Strategy Pattern-ৰ সুবিধা

- Payment, discount বা shipping policy পৃথক কৰি ৰাখিব পাৰি।
- নতুন strategy যোগ কৰোঁতে cart-ৰ মূল code কম সলনি হয়।
- প্ৰতিটো strategy পৃথকে test কৰিব পাৰি।

### বাস্তৱ payment system-ত অতিৰিক্ত প্ৰয়োজন

বাস্তৱ payment-ৰ বাবে trusted payment provider, server-side verification, signed webhook, idempotency key, secure secret management, reconciliation আৰু error handling প্ৰয়োজন। কেৱল success message print কৰাটো payment সম্পন্ন হোৱাৰ প্ৰমাণ নহয়।

## ১২.৮ Factory Pattern

Factory Pattern-এ object সৃষ্টি কৰাৰ logic-টো ব্যৱহাৰকাৰী code-ৰ পৰা পৃথক কৰে। Client-এ প্ৰতিটো concrete class কেনেকৈ সৃষ্টি হয় সেই detail জানিব নালাগে।

### উদাহৰণ: Notification Factory

\`\`\`python
from abc import ABC, abstractmethod


class Notifier(ABC):
    @abstractmethod
    def send(self, message):
        pass


class ConsoleNotifier(Notifier):
    def send(self, message):
        print(f"Notification: {message}")


class FileNotifier(Notifier):
    def __init__(self, path):
        self.path = path

    def send(self, message):
        with open(self.path, "a", encoding="utf-8") as file:
            file.write(message + "\\n")


class NotifierFactory:
    @staticmethod
    def create(kind):
        if kind == "console":
            return ConsoleNotifier()
        if kind == "file":
            return FileNotifier("notifications.txt")
        raise ValueError(f"অজ্ঞাত notifier type: {kind}")


notifier = NotifierFactory.create("console")
notifier.send("আপোনাক স্বাগতম")
\`\`\`

ইয়াত factory-এ প্ৰকৃত notifier object সৃষ্টি কৰে। কেৱল "Database Connected" ধৰণৰ string ঘূৰাই দিলে database connection সৃষ্টি হোৱা বুলি ক’ব নোৱাৰি। Factory-ৰ কাম object সৃষ্টি কৰা; বাস্তৱ resource সংযোগৰ কাম সংশ্লিষ্ট implementation-এ কৰিব লাগে।

## ১২.৯ Dependency Injection (DI)

Dependency Injection মানে এটা class-এ নিজৰ dependency নিজে সৃষ্টি নকৰি বাহিৰৰ পৰা গ্ৰহণ কৰে।

\`\`\`python
class WelcomeService:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier

    def welcome(self, name):
        self.notifier.send(f"স্বাগতম, {name}")


console = NotifierFactory.create("console")
service = WelcomeService(console)
service.welcome("ৰিমা")
\`\`\`

ইয়াত \`WelcomeService\`-এ factory-ৰ concrete implementation-ৰ ওপৰত নিৰ্ভৰ নকৰি \`Notifier\` abstraction গ্ৰহণ কৰিছে। Test-ত fake notifier পঠিয়াব পাৰি।

## ১২.১০ সৰু Unit Test উদাহৰণ

\`\`\`python
class FakeNotifier(Notifier):
    def __init__(self):
        self.messages = []

    def send(self, message):
        self.messages.append(message)


def test_welcome_service():
    fake = FakeNotifier()
    service = WelcomeService(fake)

    service.welcome("ৰিমা")

    assert fake.messages == ["স্বাগতম, ৰিমা"]


test_welcome_service()
print("Test passed")
\`\`\`

এইটো সৰল assertion-ভিত্তিক উদাহৰণ। ডাঙৰ project-ত \`pytest\`-ৰ দৰে test framework ব্যৱহাৰ কৰি test automatically run কৰা ভাল।

## ১২.১১ Pattern বাছনি কৰাৰ সময়ত সাৱধানতা

| Pattern/নীতি | কেতিয়া সহায়ক | অতিৰিক্ত ব্যৱহাৰৰ বিপদ |
|---|---|---|
| SRP | পৃথক দায়িত্ব আৰু পৰিৱৰ্তনৰ কাৰণ থাকিলে | অতি সৰু class-ৰ ভিৰ |
| OCP | নতুন policy সঘনাই যোগ হ’লে | অযথা abstraction |
| LSP | Parent/subtype relation থাকিলে | ভুল inheritance hierarchy |
| ISP | Client-ৰ প্ৰয়োজন পৃথক হ’লে | অতি বেছি ক্ষুদ্ৰ interface |
| DIP | Business logic-ৰ implementation সলনি হ’ব পাৰে | সৰু script-ত অতিৰিক্ত জটিলতা |
| Strategy | একে কামৰ একাধিক algorithm থাকিলে | অপ্রয়োজনীয় class বৃদ্ধি |
| Factory | Object creation জটিল বা কেন্দ্ৰীভূত হ’লে | সাধাৰণ constructor-ৰ সলনি অযথা factory |

SOLID আৰু Design Pattern-ৰ লক্ষ্য code জটিল কৰা নহয়; প্ৰকৃত পৰিৱৰ্তন আৰু testing সহজ কৰা।

## ১২.১২ সাধাৰণ ভুল

1. SRP-ৰ অৰ্থ এটা class-ত মাত্ৰ এটা method থাকিব লাগে বুলি নাভাবিব; মুখ্য দায়িত্বৰ কথা কোৱা হৈছে।
2. OCP-ৰ বাবে প্ৰতিটো class-ত interface সৃষ্টি কৰাৰ প্ৰয়োজন নাই।
3. LSP মানে কেৱল method signature একে হ’লেই নহয়; আচৰণৰ contract-ও মানিব লাগে।
4. ISP-এ client-ক অপ্ৰয়োজনীয় method-ৰ ওপৰত নিৰ্ভৰ কৰাৰ পৰা বচায়।
5. DIP আৰু Dependency Injection সম্পৰ্কিত, কিন্তু একে শব্দৰ অৰ্থ নহয়। DIP হৈছে design principle; DI হৈছে dependency যোগান ধৰাৰ এটা technique।
6. Factory-এ object সৃষ্টি কৰে; ই নিজে নিজে external service connect নকৰে।
7. Payment simulation-ৰ print output-ক বাস্তৱ transaction বুলি নাভাবিব।
8. Design Pattern মুখস্থ কৰি প্ৰয়োগ নকৰি problem-ৰ প্ৰয়োজন বুজি বাছনি কৰক।

## ১২.১৩ অনুশীলনী

1. SOLID-ৰ পাঁচটা আখৰৰ সম্পূৰ্ণ নাম লিখক।
2. Single Responsibility Principle-ৰ এটা বাস্তৱ উদাহৰণ দিয়ক।
3. Open/Closed Principle-ৰ উদ্দেশ্য কি?
4. Liskov Substitution Principle ভংগ হ’লে কি সমস্যা হ’ব পাৰে?
5. Interface Segregation Principle-এ client-ক কেনেকৈ সহায় কৰে?
6. Dependency Inversion Principle-ত abstraction-ৰ ভূমিকা কি?
7. DIP আৰু Dependency Injection-ৰ পাৰ্থক্য লিখক।
8. Strategy Pattern কেতিয়া ব্যৱহাৰ কৰিব পাৰি?
9. Factory Pattern-ৰ এটা সুবিধা লিখক।
10. Factory-এ string ঘূৰালে বাস্তৱ database connection সৃষ্টি হয়নে?
11. Payment example-টো কিয় simulation বুলি কোৱা হৈছে?
12. FakeNotifier unit test-ত কিয় উপযোগী?
13. অতিৰিক্ত design pattern ব্যৱহাৰ কৰিলে কি অসুবিধা হ’ব পাৰে?
14. Strategy আৰু Factory Pattern-ৰ পাৰ্থক্য লিখক।

### উত্তৰ-সূচী

1. Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion।
2. গণনা আৰু file storage পৃথক class-ত ৰখা।
3. নতুন আচৰণ যোগ কৰোঁতে পুৰণি code-ৰ পৰিৱৰ্তন কমোৱা।
4. Child object-এ parent-ৰ contract ভংগ কৰি caller-ৰ code ভাঙিব পাৰে।
5. প্ৰয়োজন নথকা method implement বা depend কৰিব নালাগে।
6. High-level আৰু low-level module-এ shared abstraction-ৰ ওপৰত নিৰ্ভৰ কৰে।
7. DIP design principle; DI dependency বাহিৰৰ পৰা পঠিওৱাৰ পদ্ধতি।
8. একে কামৰ একাধিক algorithm বা policy সলনি কৰিব লাগিলে।
9. Object creation-ৰ logic client-ৰ পৰা পৃথক কৰে।
10. নহয়; বাস্তৱ connection-ৰ বাবে উপযুক্ত database client আৰু connection code লাগে।
11. উদাহৰণটো কোনো payment provider-ৰ সৈতে সংযুক্ত নহয় আৰু বাস্তৱ ধন স্থানান্তৰ নকৰে।
12. External service নোহোৱাকৈ service-ৰ আচৰণ পৰীক্ষা কৰিব পাৰি।
13. অপ্রয়োজনীয় class, abstraction আৰু maintenance cost বৃদ্ধি পায়।
14. Strategy-এ আচৰণ/algorithm সলনি কৰে; Factory-এ object সৃষ্টি কৰাৰ দায়িত্ব লয়।

## ১২.১৪ সাৰাংশ

এই অধ্যায়ত SOLID-ৰ পাঁচটা নীতি, Strategy Pattern, Factory Pattern আৰু Dependency Injection শিকিলোঁ। ভাল software design-ত abstraction আৰু pattern-ৰ ব্যৱহাৰ problem-ৰ প্ৰয়োজন অনুসৰি হ’ব লাগে। অতিৰিক্ত abstraction-তকৈ স্পষ্ট, পৰীক্ষাযোগ্য আৰু সহজ code অধিক মূল্যৱান।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python abc — Abstract Base Classes: https://docs.python.org/3/library/abc.html
- Python typing: https://docs.python.org/3/library/typing.html
- Python unittest.mock: https://docs.python.org/3/library/unittest.mock.html
- Python decimal: https://docs.python.org/3/library/decimal.html
\`,
    },
    id: 'ch-13',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৪: AsyncIO আৰু নন-ব্লকিং I/O',
      subtitle: 'Coroutine, Event Loop, Task, gather, TaskGroup, Semaphore আৰু aiohttp',
      estimatedReadTime: '30 min',
      topics: ['Concurrency vs Parallelism', 'Coroutine and Event Loop', 'await and asyncio.run', 'Task and gather', 'TaskGroup', 'Timeout and Cancellation', 'Semaphore and Bounded Concurrency', 'aiohttp HTTP Client', 'Error Handling', 'When AsyncIO Helps'],
      content: \`## ১৪.১ Concurrency আৰু Parallelism

**Concurrency** মানে একাধিক কামৰ অগ্ৰগতি একে সময়ছোৱাত পৰিচালনা কৰা। এটা CPU core-ত কামসমূহৰ মাজত সলনি কৰি (interleaving) এইটো কৰিব পাৰি। **Parallelism** মানে একে মুহূৰ্ততে একাধিক কাম বাস্তৱতে চলা, সাধাৰণতে একাধিক CPU core বা processor-ত।

Python-ৰ \`asyncio\` মূলত I/O-bound কামৰ concurrency-ৰ বাবে উপযোগী—যেনে network request, socket, asynchronous file/database client। ই নিজে CPU-ৰ গধুৰ গণনা একাধিক core-ত parallel কৰি নিদিয়ে। CPU-bound কামৰ বাবে প্ৰয়োজন অনুসৰি multiprocessing বা native code বিবেচনা কৰক।

## ১৪.২ Coroutine আৰু Event Loop

\`async def\`-এ coroutine function সংজ্ঞায়িত কৰে। সেই function কল কৰিলে coroutine object পোৱা যায়; function-ৰ কাম চলাবলৈ সাধাৰণতে তাক \`await\` কৰিব লাগে বা task হিচাপে schedule কৰিব লাগে।

Event loop-এ ready task-সমূহ চলায়। এটা coroutine-এ \`await\` কৰি অপেক্ষা কৰিলে event loop-এ আন ready coroutine-লৈ নিয়ন্ত্ৰণ দিব পাৰে।

### প্ৰথম AsyncIO উদাহৰণ

\`\`\`python
import asyncio
import time


async def ডেটা_আনা(আইডি: int, পলম: float):
    print(f"অনুৰোধ {আইডি} আৰম্ভ")
    await asyncio.sleep(পলম)  # non-blocking অপেক্ষা
    print(f"অনুৰোধ {আইডি} সম্পূৰ্ণ")
    return {"id": আইডি, "status": "ok"}


async def মুখ্য():
    আৰম্ভ = time.perf_counter()

    ফলাফল = await asyncio.gather(
        ডেটা_আনা(1, 1.0),
        ডেটা_আনা(2, 0.5),
        ডেটা_আনা(3, 1.5),
        ডেটা_আনা(4, 0.2),
    )

    print("ফলাফল:", ফলাফল)
    print(f"মুঠ elapsed time: {time.perf_counter() - আৰম্ভ:.2f}s")


if __name__ == "__main__":
    asyncio.run(মুখ্য())
\`\`\`

এই উদাহৰণত \`asyncio.sleep()\`-এ event loop-ক আন task চলাবলৈ সুযোগ দিয়ে। ইয়াত দেখুওৱা elapsed time-টো কেৱল এই delay-সমূহৰ উদাহৰণ; বাস্তৱ API benchmark নহয়।

**মনত ৰাখিব:** \`time.sleep()\` synchronous আৰু event loop-টো block কৰে। Async coroutine-ৰ ভিতৰত non-blocking delay-ৰ বাবে \`await asyncio.sleep()\` ব্যৱহাৰ কৰক।

## ১৪.৩ \`asyncio.run()\`, \`await\` আৰু Task

- \`asyncio.run(coro)\`: সাধাৰণ Python script-ৰ পৰা top-level coroutine চলোৱাৰ সুবিধাজনক entry point।
- \`await\`: awaitable-ৰ ফলাফলৰ বাবে অপেক্ষা কৰে আৰু event loop-ক অন্য কাম চলাবলৈ সুযোগ দিয়ে।
- \`asyncio.create_task(coro)\`: coroutine-টোক task হিচাপে schedule কৰে।
- \`asyncio.gather()\`: একাধিক awaitable একেলগে অপেক্ষা কৰি ফলাফলৰ list দিয়ে।

\`\`\`python
import asyncio


async def কাম(নাম, পলম):
    await asyncio.sleep(পলম)
    return f"{নাম} শেষ"


async def মুখ্য():
    task1 = asyncio.create_task(কাম("প্ৰথম কাম", 1))
    task2 = asyncio.create_task(কাম("দ্বিতীয় কাম", 0.5))

    ফলাফল1 = await task1
    ফলাফল2 = await task2
    print(ফলাফল1, ফলাফল2)


asyncio.run(মুখ্য())
\`\`\`

Task সৃষ্টি কৰিলেই কামটো event loop-ত schedule হয়। Task-ৰ reference ৰাখক আৰু শেষত await কৰক; নহ’লে exception নেদেখা বা কাম সম্পূৰ্ণ হোৱাৰ আগতে program শেষ হোৱাৰ সমস্যা হ’ব পাৰে।

## ১৪.৪ \`asyncio.gather()\` আৰু Error Handling

\`gather()\`-এ একাধিক awaitable-ৰ ফলাফল argument-ৰ ক্ৰমত ঘূৰাই দিয়ে, task শেষ হোৱাৰ ক্ৰমত নহয়। Default-ত কোনো awaitable-এ exception দিলে সেই exception caller-লৈ propagate হয়। আন কামসমূহ স্বয়ংক্ৰিয়ভাৱে সকলো ক্ষেত্ৰত cancel হয় বুলি ধৰি নল’ব।

\`\`\`python
import asyncio


async def কাম(আইডি):
    await asyncio.sleep(0.1 * আইডি)
    if আইডি == 2:
        raise ValueError("কাম ২-ত ভুল")
    return f"ফলাফল-{আইডি}"


async def মুখ্য():
    ফলাফল = await asyncio.gather(
        কাম(1),
        কাম(2),
        কাম(3),
        return_exceptions=True,
    )

    for item in ফলাফল:
        if isinstance(item, Exception):
            print("ব্যৰ্থতা:", repr(item))
        else:
            print("সফল:", item)


asyncio.run(মুখ্য())
\`\`\`

\`return_exceptions=True\` দিলে exception-সমূহ ফলাফলৰ list-ত value হিচাপে আহে। Production code-ত সেই exception-সমূহ স্পষ্টভাৱে log আৰু handle কৰিব লাগে।

## ১৪.৫ Python 3.11+: TaskGroup

Python 3.11-ত \`asyncio.TaskGroup\` যোগ কৰা হৈছে। ই structured concurrency-ৰ সুবিধা দিয়ে: group-ৰ ভিতৰত সৃষ্টি কৰা task-সমূহ group শেষ হোৱাৰ আগতে সম্পূৰ্ণ বা cancel হোৱাৰ ব্যৱস্থা হয়।

\`\`\`python
import asyncio


async def কাম(নাম, পলম):
    await asyncio.sleep(পলম)
    print(নাম, "সম্পূৰ্ণ")


async def মুখ্য():
    async with asyncio.TaskGroup() as group:
        group.create_task(কাম("A", 0.5))
        group.create_task(কাম("B", 0.2))
        group.create_task(কাম("C", 0.8))

    print("সকলো task শেষ")


asyncio.run(মুখ্য())
\`\`\`

TaskGroup-ৰ কোনো task-ত exception হ’লে group-এ sibling task-সমূহ cancel কৰাৰ চেষ্টা কৰে আৰু exception-সমূহ সাধাৰণতে ExceptionGroup-ৰ ৰূপত report কৰে। সেইবাবে production code-ত error handling design কৰিব লাগে।

## ১৪.৬ Timeout আৰু Cancellation

Network বা বাহ্যিক service-ৰ বাবে অপেক্ষাৰ সময় সীমাহীন কৰি ৰাখিব নালাগে। Timeout-এ নিৰ্দিষ্ট সময়ৰ ভিতৰত কাম শেষ নহ’লে control ঘূৰাই দিয়ে।

\`\`\`python
import asyncio


async def ধীৰ_কাম():
    await asyncio.sleep(5)
    return "শেষ"


async def মুখ্য():
    try:
        ফলাফল = await asyncio.wait_for(
            ধীৰ_কাম(),
            timeout=1.0,
        )
        print(ফলাফল)
    except asyncio.TimeoutError:
        print("সময়সীমা পাৰ হ'ল")


asyncio.run(মুখ্য())
\`\`\`

Timeout হ’লে \`wait_for()\`-এ অপেক্ষা কৰা task cancel কৰাৰ চেষ্টা কৰে। Coroutine-এ cancellation-ৰ প্ৰতি সন্মান দেখুৱাব লাগে। Cleanup-ৰ বাবে \`try/finally\` ব্যৱহাৰ কৰক আৰু \`asyncio.CancelledError\`-ক অযথা গোপন নকৰিব।

## ১৪.৭ Semaphore-ৰে একেলগে চলা কাম সীমিত কৰা

হাজাৰটা HTTP request একেলগে পঠিয়ালে server, network আৰু নিজৰ device-ৰ ওপৰত অতিৰিক্ত চাপ পৰিব পাৰে। \`asyncio.Semaphore\`-এ একে সময়তে চলা section-ৰ সংখ্যা সীমিত কৰে।

\`\`\`python
import asyncio


async def অনুৰোধ(আইডি, semaphore):
    async with semaphore:
        print("আৰম্ভ:", আইডি)
        await asyncio.sleep(0.2)
        print("শেষ:", আইডি)
        return আইডি


async def মুখ্য():
    semaphore = asyncio.Semaphore(3)

    ফলাফল = await asyncio.gather(
        *(অনুৰোধ(i, semaphore) for i in range(10))
    )
    print("সম্পূৰ্ণ:", ফলাফল)


asyncio.run(মুখ্য())
\`\`\`

ইয়াত একে সময়তে সৰ্বাধিক ৩টা coroutine-এ semaphore-ৰ ভিতৰৰ কাম কৰিব পাৰে। এই সীমা server-ৰ rate limit, API policy আৰু নিজৰ resource অনুসৰি বাছিব লাগে।

## ১৪.৮ Async HTTP Client: aiohttp

\`aiohttp\` হৈছে third-party library। ব্যৱহাৰৰ আগতে install কৰিব লাগিব:

\`\`\`bash
python -m pip install aiohttp
\`\`\`

HTTP request-ৰ বাবে \`ClientSession\` পুনৰ ব্যৱহাৰ কৰাটো ভাল; ইয়াৰ connection pooling-এ একাধিক request-ত সহায় কৰে। প্ৰতিটো request-ৰ response-ও context manager-ৰে handle কৰক।

### সুৰক্ষিত আৰু সীমিত HTTP request-ৰ উদাহৰণ

\`\`\`python
import asyncio
import aiohttp


URLS = [
    "https://api.github.com/users/python",
    "https://api.github.com/users/google",
    "https://api.github.com/users/microsoft",
]


async def এটা_API_আনা(session, url, semaphore):
    async with semaphore:
        try:
            async with session.get(url) as response:
                response.raise_for_status()
                data = await response.json()
                return {
                    "url": url,
                    "login": data.get("login"),
                    "public_repos": data.get("public_repos"),
                }
        except asyncio.TimeoutError:
            return {"url": url, "error": "timeout"}
        except aiohttp.ClientResponseError as exc:
            return {"url": url, "error": f"HTTP {exc.status}"}
        except aiohttp.ClientError as exc:
            return {"url": url, "error": str(exc)}


async def মুখ্য():
    timeout = aiohttp.ClientTimeout(total=10)
    headers = {"User-Agent": "AsyncIO-Learning-Example"}
    semaphore = asyncio.Semaphore(3)

    async with aiohttp.ClientSession(
        timeout=timeout,
        headers=headers,
    ) as session:
        tasks = [
            এটা_API_আনা(session, url, semaphore)
            for url in URLS
        ]
        ফলাফল = await asyncio.gather(*tasks)

    for item in ফলাফল:
        print(item)


if __name__ == "__main__":
    asyncio.run(মুখ্য())
\`\`\`

এই code-ত:
1. এটা \`ClientSession\` পুনৰ ব্যৱহাৰ কৰা হৈছে।
2. প্ৰতিটো response \`async with\`-এ বন্ধ/মুক্ত কৰে।
3. Timeout ১০ ছেকেণ্ড ধৰা হৈছে।
4. Semaphore-এ concurrency সীমিত কৰিছে।
5. HTTP status error আৰু network error পৃথকভাৱে handle কৰা হৈছে।
6. \`gather()\`-এ URL-ৰ ক্ৰম অনুসৰি ফলাফল দিয়ে।

উদাহৰণৰ URL-সমূহ বাহ্যিক service-ৰ ওপৰত নিৰ্ভৰশীল। Network, API policy বা service availability অনুসৰি request ব্যৰ্থ হ’ব পাৰে। এই অধ্যায়ত বাস্তৱ request execute কৰা হোৱা নাই; code-টো শিক্ষামূলক উদাহৰণ।

## ১৪.৯ AsyncIO-ৰ সাধাৰণ ভুল

1. Coroutine function কল কৰিলেই কাম সম্পূৰ্ণ হয় বুলি নাভাবিব; coroutine-টো await বা schedule কৰিব লাগে।
2. Async function-ৰ ভিতৰত দীঘলীয়া \`time.sleep()\` ব্যৱহাৰ কৰি event loop block নকৰিব।
3. CPU-bound কাম \`asyncio\`-এ নিজে parallel কৰি দিব বুলি আশা নকৰিব।
4. Task সৃষ্টি কৰি reference নৰখা বা await নকৰা ভুল।
5. Network request-ত timeout নথকা বিপজ্জনক।
6. Response body পঢ়াৰ আগতে response context বন্ধ নকৰিব।
7. প্ৰতিটো request-ৰ বাবে নতুন session সৃষ্টি কৰাটো সাধাৰণতে অপচয়।
8. API rate limit আৰু concurrency limit মানি চলক।
9. Cancellation-ৰ সময় cleanup কৰিবলৈ \`finally\` ব্যৱহাৰ কৰক।
10. \`asyncio.run()\` ইতিমধ্যে চলি থকা event loop-ৰ ভিতৰত পুনৰ কল নকৰিব। Notebook বা কিছুমান interactive environment-ত event loop আগতেই চলি থাকিব পাৰে।

## ১৪.১০ AsyncIO কেতিয়া ব্যৱহাৰ কৰিব?

| কাম | উপযুক্ত পদ্ধতি |
|---|---|
| বহু network request | asyncio + async HTTP client |
| Async database client | সেই library-ৰ async API |
| CPU-ৰ গধুৰ image processing | multiprocessing বা optimized native library |
| সাধাৰণ synchronous script | সাধাৰণ function যথেষ্ট হ’ব পাৰে |
| বহু socket connection | asyncio উপযোগী হ’ব পাৰে |
| অতি সৰু এটা request | async ব্যৱহাৰ কৰিলে অতিৰিক্ত জটিলতা হ’ব পাৰে |

AsyncIO ব্যৱহাৰ কৰিলেই program সদায় দ্ৰুত হ’ব নালাগে। লাভ তেতিয়াহে হয় যেতিয়া বহু I/O operation-এ অপেক্ষা কৰি থাকে আৰু সেই অপেক্ষাৰ সময়ত event loop-এ অন্য কাম কৰিব পাৰে।

## ১৪.১১ অনুশীলনী

1. Concurrency আৰু Parallelism-ৰ পাৰ্থক্য লিখক।
2. Coroutine কি?
3. \`async def\`-এ কি সৃষ্টি কৰে?
4. Event Loop-ৰ কাম কি?
5. \`await\` কিয় ব্যৱহাৰ কৰা হয়?
6. \`asyncio.run()\`-ৰ কাম কি?
7. \`asyncio.gather()\`-এ ফলাফল কোন ক্ৰমত দিয়ে?
8. \`return_exceptions=True\`-ৰ অৰ্থ কি?
9. Python 3.11-ৰ TaskGroup-ৰ এটা সুবিধা লিখক।
10. Timeout কিয় প্ৰয়োজন?
11. Semaphore-এ কি নিয়ন্ত্ৰণ কৰে?
12. aiohttp-ত ClientSession পুনৰ ব্যৱহাৰ কিয় ভাল?
13. Async function-ৰ ভিতৰত \`time.sleep()\` কিয় এৰাব লাগে?
14. CPU-bound কামৰ বাবে AsyncIO সদায় উপযুক্ত নে?
15. HTTP response-ৰ status code error handle কৰিবলৈ কোন method ব্যৱহাৰ কৰিব পাৰি?

### উত্তৰ-সূচী

1. Concurrency-ত একাধিক কামৰ অগ্ৰগতি একে সময়ছোৱাত পৰিচালিত হয়; parallelism-ত কাম একে মুহূৰ্ততে একাধিক processor/core-ত চলে।
2. স্থগিত আৰু পুনৰ আৰম্ভ কৰিব পৰা asynchronous computation-ৰ object।
3. Coroutine function; কল কৰিলে coroutine object পোৱা যায়।
4. Ready task-সমূহ schedule আৰু execute কৰা।
5. Awaitable-ৰ ফলাফলৰ বাবে অপেক্ষা কৰি event loop-ক অন্য কাম কৰিবলৈ সুযোগ দিবলৈ।
6. Top-level coroutine চলাই event loop পৰিচালনা কৰে।
7. gather-ত দিয়া argument-ৰ ক্ৰমত।
8. Exception-সমূহ ফলাফলৰ list-ত value হিচাপে ঘূৰাই দিয়ে।
9. Task-সমূহৰ lifecycle এটা group-ৰ ভিতৰত সংগঠিত কৰে আৰু error-ত sibling cancellation পৰিচালনা কৰে।
10. অনন্তকাল অপেক্ষা ৰোধ কৰিবলৈ।
11. একে সময়তে semaphore-ৰ ভিতৰত প্ৰৱেশ কৰা task-ৰ সংখ্যা।
12. Connection pooling আৰু resource management-ৰ বাবে।
13. ই event loop block কৰে।
14. নহয়; CPU-bound কামৰ বাবে multiprocessing বা optimized native code উপযুক্ত হ’ব পাৰে।
15. \`response.raise_for_status()\`।

## ১৪.১২ সাৰাংশ

এই অধ্যায়ত AsyncIO-ৰ coroutine, event loop, await, task, gather, TaskGroup, timeout, cancellation, semaphore আৰু aiohttp শিকিলোঁ। AsyncIO মূলত I/O-bound workload-ত concurrency-ৰ বাবে উপযোগী। সঠিক resource cleanup, timeout, error handling আৰু concurrency limit production code-ত অতি গুৰুত্বপূৰ্ণ।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python asyncio: https://docs.python.org/3/library/asyncio.html
- asyncio Tasks: https://docs.python.org/3/library/asyncio-task.html
- asyncio Synchronization Primitives: https://docs.python.org/3/library/asyncio-sync.html
- aiohttp Client Quickstart: https://docs.aiohttp.org/en/stable/client_quickstart.html
\`,
    },
    id: 'ch-14',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৬: লগিং, এক্সেপচন আৰ্কিটেকচাৰ আৰু মনিটৰিং',
      subtitle: 'Production Logging, Rotating File Handler, Custom Exception Hierarchy আৰু Error Handling',
      estimatedReadTime: '25 min',
      topics: ['Logging Levels', 'Logger and Handler', 'RotatingFileHandler', 'UTF-8 Log Files', 'Structured Logging', 'Custom Exception Hierarchy', 'Exception Chaining', 'Try-Except-Else-Finally', 'Traceback and logger.exception', 'Sensitive Data and Monitoring'],
      content: \`## ১৬.১ Logging কিয় প্ৰয়োজন?

Program চলি থাকোঁতে কি ঘটিছে তাৰ তথ্য সংৰক্ষণ কৰাৰ পদ্ধতিক Logging বোলে। Debugging-ৰ উপৰিও production system-ত সমস্যা চিনাক্ত কৰা, request-ৰ অৱস্থা বুজা আৰু operational monitoring-ত log সহায়ক।

সাধাৰণতে Python logging-ৰ পাঁচটা গুৰুত্বপূৰ্ণ level আছে:

| Level | ব্যৱহাৰ |
|---|---|
| DEBUG | বিকাশৰ সময়ৰ সূক্ষ্ম তথ্য |
| INFO | স্বাভাৱিক ঘটনা, যেনে service আৰম্ভ |
| WARNING | সম্ভাৱ্য সমস্যা, কিন্তু কাম চলি আছে |
| ERROR | কোনো operation ব্যৰ্থ |
| CRITICAL | অতি গুৰুতৰ সমস্যা |

Level-ৰ সংখ্যা ক্ৰমে বৃদ্ধি পায়: DEBUG, INFO, WARNING, ERROR, CRITICAL। Logger-ৰ level-তকৈ কম priority-ৰ message সাধাৰণতে emit নহয়।

## ১৬.২ Logger, Handler আৰু Formatter

Python logging-ৰ মূল অংশসমূহ:

- **Logger:** application-ৰ পৰা log message গ্ৰহণ কৰে।
- **Handler:** log ক’লৈ যাব নিৰ্ধাৰণ কৰে—console, file আদি।
- **Formatter:** message-টো কেনেদৰে দেখুওৱা হ’ব নিৰ্ধাৰণ কৰে।
- **Filter:** কোন message আগবঢ়োৱা হ’ব তাৰ অতিৰিক্ত নিয়ম দিব পাৰে।

এটা logger-ত একাধিক handler যোগ কৰিব পাৰি। উদাহৰণস্বৰূপে INFO-ৰ পৰা console-লৈ আৰু DEBUG-ৰ পৰা file-লৈ log পঠিয়াব পাৰি।

### Console আৰু Rotating File Logging

\`\`\`python
import logging
import sys
from logging.handlers import RotatingFileHandler


def configure_logging():
    logger = logging.getLogger("CodeYatra")
    logger.setLevel(logging.DEBUG)
    logger.propagate = False

    # Function-টো পুনৰ কল হ'লেও duplicate handler নযোগাব
    if logger.handlers:
        return logger

    formatter = logging.Formatter(
        "%(asctime)s %(levelname)s %(name)s "
        "%(filename)s:%(lineno)d - %(message)s"
    )

    console = logging.StreamHandler(sys.stdout)
    console.setLevel(logging.INFO)
    console.setFormatter(formatter)

    file_handler = RotatingFileHandler(
        "app.log",
        maxBytes=1_000_000,
        backupCount=5,
        encoding="utf-8",
    )
    file_handler.setLevel(logging.DEBUG)
    file_handler.setFormatter(formatter)

    logger.addHandler(console)
    logger.addHandler(file_handler)
    return logger


logger = configure_logging()

logger.debug("Debug detail")
logger.info("চিষ্টেম আৰম্ভ হ'ল")
logger.warning("মেম'ৰি ব্যৱহাৰ বাঢ়িছে")
logger.error("এটা operation ব্যৰ্থ হ'ল")
\`\`\`

এই configuration-ত:
1. Console-ত INFO আৰু তাৰ ওপৰৰ message দেখা যায়।
2. File-ত DEBUG-সহ সকলো level লিখা হয়।
3. File ১,০০০,০০০ bytes-ৰ ওচৰ পালেই rotation হয়।
4. বৰ্তমান file-ৰ লগতে সৰ্বাধিক ৫টা backup file ৰখা হয়।
5. \`encoding="utf-8"\`-এ Assamese text লিখাত সহায় কৰে।
6. \`propagate = False\`-এ root logger-লৈ পুনৰ propagate হৈ duplicate output হোৱাৰ সম্ভাৱনা কমায়।

\`maxBytes\`-ৰ মান সঠিক file size-ৰ guarantee নহয়; rotation-ৰ সীমা নিৰ্ধাৰণ কৰা হয়। Production-ত log directory-ৰ permission, disk space আৰু retention policy-ও পৰীক্ষা কৰিব লাগে।

## ১৬.৩ Logging-ত Duplicate Handler-ৰ সমস্যা

একেটা logger-ত একাধিকবাৰ handler যোগ কৰিলে একেটা message বহুবার দেখা যাব পাৰে। Application-ৰ module import বা startup path-ত logging setup পুনৰ চলিলে এই সমস্যা হয়।

- Logging configuration সাধাৰণতে application startup-ত এবাৰ কৰক।
- Library code-ত root logger configure নকৰিব; নিজৰ module logger ব্যৱহাৰ কৰক।
- Handler যোগ কৰাৰ আগতে setup policy নিৰ্ধাৰণ কৰক।
- Production application-ত configuration file বা \`logging.config.dictConfig()\` ব্যৱহাৰ কৰিব পাৰি।

Library-ৰ সাধাৰণ pattern:

\`\`\`python
import logging

logger = logging.getLogger(__name__)


def load_data():
    logger.info("ডেটা load আৰম্ভ")
\`\`\`

Library-এ নিজে console/file handler যোগ নকৰি application-এ logging configuration নিয়ন্ত্ৰণ কৰাটো ভাল।

## ১৬.৪ Structured Logging

সাধাৰণ text log মানুহে পঢ়িবলৈ সুবিধাজনক। কিন্তু বহু service-ৰ log search আৰু analysis কৰিবলৈ key-value বা JSON-ধৰণৰ structured data অধিক সুবিধাজনক।

Python-ৰ built-in logging-ত \`extra\` parameter-এ অতিরিক্ত field যোগ কৰিব পাৰে।

\`\`\`python
import logging

logger = logging.getLogger("orders")

logger.info(
    "Order processed",
    extra={
        "order_id": "ORD-1001",
        "status": "completed",
    },
)
\`\`\`

সাধাৰণ Formatter-এ নিজে নিজে সকলো custom field print নকৰে। সেই field দেখুৱাবলৈ custom Formatter বা JSON logging library/configuration লাগে। তলত এটা সৰল JSON formatter-ৰ উদাহৰণ দিয়া হৈছে।

\`\`\`python
import json
import logging


class JSONFormatter(logging.Formatter):
    def format(self, record):
        data = {
            "time": self.formatTime(record),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }

        for key in ("order_id", "status"):
            if hasattr(record, key):
                data[key] = getattr(record, key)

        if record.exc_info:
            data["exception"] = self.formatException(record.exc_info)

        return json.dumps(data, ensure_ascii=False)


logger = logging.getLogger("orders-json")
logger.setLevel(logging.INFO)
logger.propagate = False

handler = logging.StreamHandler()
handler.setFormatter(JSONFormatter())
logger.addHandler(handler)

logger.info(
    "Order processed",
    extra={"order_id": "ORD-1001", "status": "completed"},
)
\`\`\`

JSON formatter-টো এটা শিক্ষামূলক উদাহৰণ। Production-ত field validation, timestamp format, nested data আৰু log ingestion platform-ৰ format অনুসৰি উন্নত কৰিব লাগিব।

## ১৬.৫ Sensitive Data লগ নকৰিব

Log-ত password, OTP, API key, access token, session cookie, সম্পূৰ্ণ card number বা ব্যক্তিগত গোপন তথ্য লিখিব নালাগে। Log file-ও sensitive data store হ’ব পাৰে।

ভুল পদ্ধতি:

\`\`\`python
# এনে code ব্যৱহাৰ নকৰিব
# logger.info("Login data: %s", user_input)
\`\`\`

ভাল পদ্ধতি:

\`\`\`python
logger.info("Login attempt received for user_id=%s", user_id)
\`\`\`

- প্ৰয়োজনত user identifier-ও redact বা pseudonymize কৰক।
- Log file-ৰ access সীমিত ৰাখক।
- Retention আৰু deletion policy নিৰ্ধাৰণ কৰক।
- User input log কৰোঁতে newline বা control character-ৰ জৰিয়তে log injection হ’ব পাৰে; উপযুক্ত sanitization কৰক।

## ১৬.৬ Custom Exception Hierarchy

নিজৰ application-ৰ error-সমূহ স্পষ্টভাৱে চিনাক্ত কৰিবলৈ custom exception class সৃষ্টি কৰিব পাৰি। সাধাৰণতে application-specific base exception-ৰ পৰা নিৰ্দিষ্ট exception-সমূহ inherit কৰোৱা হয়।

\`\`\`python
class CodeYatraError(Exception):
    """এই application-ৰ সকলো custom error-ৰ base class."""


class ValidationError(CodeYatraError):
    def __init__(self, field: str, message: str):
        self.field = field
        super().__init__(f"[{field}] {message}")


class UserNotFoundError(CodeYatraError):
    pass


def create_user(data: dict):
    email = data.get("email")
    if not isinstance(email, str) or not email.strip():
        raise ValidationError("email", "সঠিক email বাধ্যতামূলক")

    age = data.get("age")
    if isinstance(age, bool) or not isinstance(age, int):
        raise ValidationError("age", "বয়স পূৰ্ণসংখ্যা হ'ব লাগিব")
    if age < 18:
        raise ValidationError("age", "বয়স ১৮ বছৰৰ কম হ'ব নোৱাৰে")

    return {"status": "created", "email": email.strip()}


try:
    result = create_user({"email": "riku@example.com", "age": 16})
except ValidationError as exc:
    print("Validation error:", exc)
\`\`\`

এই উদাহৰণত:
- \`CodeYatraError\` হৈছে application-ৰ base exception।
- \`ValidationError\`-এ কোন field-ত সমস্যা হৈছে সেই তথ্য ৰাখে।
- \`bool\` Python-ত \`int\`-ৰ subclass; সেইবাবে বয়স validate কৰোঁতে \`True\`-ক ১ বছৰ বুলি গ্ৰহণ নকৰিবলৈ পৃথক check কৰা হৈছে।
- ভুল data পালে function-এ স্পষ্ট exception raise কৰে।

## ১৬.৭ Exception Chaining

এটা low-level exception-ৰ কাৰণে application-level exception সৃষ্টি হ’লে \`raise ... from exc\` ব্যৱহাৰ কৰি মূল কাৰণটো সংৰক্ষণ কৰিব পাৰি।

\`\`\`python
class DataLoadError(Exception):
    pass


def load_number(text):
    try:
        return int(text)
    except ValueError as exc:
        raise DataLoadError("সংখ্যা load কৰিব পৰা নগ'ল") from exc


try:
    load_number("abc")
except DataLoadError as exc:
    print("Application error:", exc)
    print("মূল কাৰণ:", repr(exc.__cause__))
\`\`\`

Exception chaining-এ debugging-ত সহায় কৰে। মূল exception-টো নীৰৱে বাদ নিদিব।

## ১৬.৮ try, except, else আৰু finally

- \`try\`: যি code-ত exception হ’ব পাৰে।
- \`except\`: নিৰ্দিষ্ট exception handle কৰে।
- \`else\`: try block-ত exception নহ’লেহে চলে।
- \`finally\`: exception হওক বা নহওক, cleanup-ৰ বাবে চলে।

\`\`\`python
def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("শূন্যৰে ভাগ কৰিব নোৱাৰি")
        return None
    else:
        print("ভাগ সফল")
        return result
    finally:
        print("ভাগৰ operation শেষ")


print(divide(10, 2))
print(divide(10, 0))
\`\`\`

অতি বহল \`except Exception\` ব্যৱহাৰ কৰি সকলো error একে ধৰণে গোপন নকৰিব। সম্ভৱ হ’লে নিৰ্দিষ্ট exception handle কৰক। \`KeyboardInterrupt\` আৰু \`SystemExit\`-ৰ দৰে user/system control signal-সমূহো অযথা capture নকৰিব।

## ১৬.৯ Traceback আৰু logger.exception()

Exception handle কৰোঁতে traceback-সহ log কৰিবলৈ \`logger.exception()\` ব্যৱহাৰ কৰিব পাৰি। ইয়াক সাধাৰণতে \`except\` block-ৰ ভিতৰত কল কৰা হয়।

\`\`\`python
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
)

logger = logging.getLogger("service")


def read_config(path):
    try:
        with open(path, "r", encoding="utf-8") as file:
            return file.read()
    except FileNotFoundError:
        logger.exception("Configuration file পোৱা নগ'ল")
        raise


try:
    read_config("settings.json")
except FileNotFoundError:
    print("Configuration file অনুপস্থিত; service আৰম্ভ কৰিব নোৱাৰি")
\`\`\`

\`logger.exception()\`-এ exception information-সহ log কৰে। একে exception-টো পুনৰ raise কৰিলে উপৰৰ স্তৰেও handle কৰিব পাৰে। কিন্তু একেটা error প্ৰতিটো স্তৰত log কৰিলে duplicate traceback হ’ব পাৰে; কোন স্তৰত log কৰা উচিত সেয়া design কৰক।

## ১৬.১০ Monitoring আৰু Logging-ৰ পাৰ্থক্য

Logging-এ ঘটনা আৰু context-ৰ record ৰাখে। Monitoring-এ system-ৰ health আৰু আচৰণ সময়ৰ সৈতে পৰ্যবেক্ষণ কৰে।

| বিষয় | Logging | Monitoring |
|---|---|---|
| মূল লক্ষ্য | কি ঘটিল তাৰ record | system সুস্থ নে নহয় বুজা |
| উদাহৰণ | Login failed | Error rate বৃদ্ধি |
| তথ্য | Event/message | Metric, alert, trace আদি |
| ব্যৱহাৰ | Debugging আৰু audit | Availability আৰু performance |

Production system-ত log-ৰ লগতে metric (যেনে request count, latency, error rate), alert আৰু distributed tracing-ও প্ৰয়োজন হ’ব পাৰে। Log থাকিলেই monitoring সম্পূৰ্ণ নহয়।

## ১৬.১১ সাধাৰণ ভুল

1. সকলো message-কে ERROR level-ত লিখা।
2. একেটা logger-ত বাৰে বাৰে handler যোগ কৰা।
3. Password, token বা OTP log কৰা।
4. Exception ধৰি একো নকৰাকৈ নীৰৱে বাদ দিয়া।
5. সকলো exception-ৰ বাবে একেটা generic message ব্যৱহাৰ কৰা।
6. Log file-ৰ size, rotation আৰু retention উপেক্ষা কৰা।
7. Assamese text-ৰ বাবে file encoding নিৰ্দিষ্ট নকৰা।
8. Library code-ৰ পৰা root logger-ৰ configuration সলনি কৰা।
9. \`logger.exception()\`-ক except block-ৰ বাহিৰত ব্যৱহাৰ কৰি traceback আশা কৰা।
10. Logging-ক সম্পূৰ্ণ monitoring বুলি ধৰি লোৱা।

## ১৬.১২ অনুশীলনী

1. Logging কিয় ব্যৱহাৰ কৰা হয়?
2. DEBUG আৰু INFO-ৰ পাৰ্থক্য কি?
3. Logger, Handler আৰু Formatter-ৰ কাম লিখক।
4. RotatingFileHandler কিয় উপযোগী?
5. \`backupCount=5\`-এ কি বুজায়?
6. Logging configuration বাৰে বাৰে চলালে কি সমস্যা হ’ব পাৰে?
7. Structured logging কি?
8. \`extra\` parameter-ৰ কাম কি?
9. Password আৰু API token log কৰা উচিত নে?
10. Custom exception hierarchy-ৰ সুবিধা কি?
11. \`raise ... from exc\`-এ কি কৰে?
12. try block-ত error নহ’লে কোন block চলে?
13. \`finally\` কিয় ব্যৱহাৰ কৰা হয়?
14. \`logger.exception()\` ক’ত ব্যৱহাৰ কৰা উচিত?
15. Logging আৰু Monitoring-ৰ পাৰ্থক্য লিখক।

### উত্তৰ-সূচী

1. Program-ৰ ঘটনা, সমস্যা আৰু operation-ৰ তথ্য সংৰক্ষণ কৰিবলৈ।
2. DEBUG অধিক সূক্ষ্ম diagnostic তথ্য; INFO স্বাভাৱিক operation-ৰ তথ্য।
3. Logger message গ্ৰহণ কৰে, Handler গন্তব্য বাছে, Formatter output-ৰ format নিৰ্ধাৰণ কৰে।
4. File ডাঙৰ হৈ disk ভৰাই পেলোৱাৰ আশংকা কমায় আৰু পুৰণি log backup ৰাখে।
5. বৰ্তমান file-ৰ উপৰিও সৰ্বাধিক ৫টা rotated backup ৰখাৰ সীমা।
6. Duplicate log output আৰু অপ্রয়োজনীয় handler সৃষ্টি হ’ব পাৰে।
7. Key-value বা machine-readable field-সহ log record।
8. LogRecord-ত অতিৰিক্ত custom field যোগ কৰে।
9. নালাগে; sensitive data বাদ বা redact কৰিব লাগে।
10. Application-ৰ error-সমূহ স্পষ্টভাৱে পৃথক কৰি handle কৰিব পাৰি।
11. নতুন exception-ৰ সৈতে মূল exception-ৰ কাৰণ সংযোগ কৰে।
12. else block।
13. Cleanup code নিশ্চিতভাৱে চলাবলৈ।
14. সাধাৰণতে exception handle কৰা except block-ৰ ভিতৰত।
15. Logging event record কৰে; Monitoring system health আৰু trend পৰ্যবেক্ষণ কৰে।

## ১৬.১৩ সাৰাংশ

এই অধ্যায়ত Python logging level, logger-handler-formatter, rotating file, structured logging, sensitive data protection, custom exception hierarchy, exception chaining আৰু try-except-else-finally শিকিলোঁ। Production application-ত স্পষ্ট log, নিৰাপদ data handling, উপযুক্ত error handling আৰু monitoring একেলগে ব্যৱহাৰ কৰা উচিত।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- Python Logging HOWTO: https://docs.python.org/3/howto/logging.html
- Python Logging Cookbook: https://docs.python.org/3/howto/logging-cookbook.html
- logging.handlers: https://docs.python.org/3/library/logging.handlers.html
- Built-in Exceptions: https://docs.python.org/3/library/exceptions.html
- Errors and Exceptions Tutorial: https://docs.python.org/3/tutorial/errors.html
\`,
    },
    id: 'ch-15',
      volume: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      title: 'অধ্যায় ১৭: ৰিলেশ্যনেল ডাটাবেছ, SQL আৰু ACID ধৰ্ম',
      subtitle: 'SQLite In-depth, Parameterized Queries, Indexing & ACID Transactions',
      estimatedReadTime: '9 min',
      topics: ['SQLite3 Context Management', 'SQL Joins', 'Database Normalization', 'ACID Properties'],
      content: `## ১৭.১ SQLite ত মৌলিক পৰিচালনা

\`\`\`python
import sqlite3
from contextlib import closing

def ডাটাবেছ_পৰিচালনা():
    with closing(sqlite3.connect("ব্যৱহাৰকাৰী.db")) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        # টেবুল সৃষ্টি
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            age INTEGER CHECK(age >= 0),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        
        # ইনডেক্স সৃষ্টি
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_email ON users(email)")
        
        # পেৰামিটাৰাইজড ইনচাৰ্ট
        users = [
            ("ৰিকু", "riku@mail.com", 25),
            ("জয়ন্ত", "jay@mail.com", 30),
            ("প্ৰিয়া", "priya@mail.com", 22)
        ]
        cursor.executemany(
            "INSERT OR IGNORE INTO users (name, email, age) VALUES (?, ?, ?)",
            users
        )
        conn.commit()
        
        # কুৱেৰি
        cursor.execute("SELECT * FROM users WHERE age > ?", (20,))
        for row in cursor.fetchall():
            print(f"{row['name']} | {row['email']} | {row['age']} বছৰ")
\`\`\`

---

## ১৭.২ ACID ধৰ্ম

| ধৰ্ম | ব্যাখ্যা |
| :--- | :--- |
| **Atomicity** | সম্পূৰ্ণ ট্ৰাঞ্জেকচন সফল হ'ব লাগিব বা একোৱেই নহ'ব (All or Nothing) |
| **Consistency** | ট্ৰাঞ্জেকচনৰ পূৰ্বে আৰু পিছত ডাটাবেছ সকলো নিয়ম আৰু কনষ্ট্ৰেইণ্ট মানি থাকিব |
| **Isolation** | সমান্তৰালভাৱে চলা ট্ৰাঞ্জেকচনসমূহে ইটোৱে সিটোক বিপথগামী নকৰে |
| **Durability** | এবাৰ কমিট হোৱা ডেটা বিদ্যুৎ বিচ্ছিন্ন হ'লেও চিৰস্থায়ী হৈ থাকিব |`,
    },
    {
      id: 'ch-16',
      volume: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      title: 'অধ্যায় ১৬: প্ৰডাকচন-ৰেডি RESTful API (FastAPI আৰু Pydantic V2)',
      subtitle: 'Lifespan, Data Validation, Dependency Injection, Password Hashing আৰু JWT Authentication',
      estimatedReadTime: '30 min',
      topics: ['REST API Fundamentals', 'HTTP Methods and Status Codes', 'FastAPI Routing', 'Pydantic V2 Models', 'Response Models', 'Dependency Injection', 'Password Hashing', 'JWT Access Tokens', 'Environment Secrets', 'API Testing and Production Limitations'],
      content: \`## ১৬.১ REST API-ৰ মৌলিক ধাৰণা

API (Application Programming Interface)-এ দুটা software system-ৰ মাজত যোগাযোগৰ নিয়ম নিৰ্ধাৰণ কৰে। REST হৈছে web API design-ৰ এটা architectural style।

সাধাৰণ HTTP method-সমূহ:

| Method | সাধাৰণ ব্যৱহাৰ |
|---|---|
| GET | তথ্য পঢ়া |
| POST | নতুন resource সৃষ্টি |
| PUT | resource সম্পূৰ্ণৰূপে update |
| PATCH | resource-ৰ নিৰ্দিষ্ট অংশ update |
| DELETE | resource মচি পেলোৱা |

গুৰুত্বপূৰ্ণ HTTP status code:

- 200 OK — request সফল।
- 201 Created — নতুন resource সৃষ্টি হ'ল।
- 204 No Content — সফল, কিন্তু response body নাই।
- 400 Bad Request — request-ত ভুল।
- 401 Unauthorized — authentication প্ৰয়োজন বা ব্যৰ্থ।
- 403 Forbidden — পৰিচয় জনা আছে, কিন্তু অনুমতি নাই।
- 404 Not Found — resource পোৱা নগ'ল।
- 422 Unprocessable Content — validation ব্যৰ্থ।
- 500 Internal Server Error — server-ৰ ভিতৰুৱা সমস্যা।

## ১৬.২ FastAPI আৰু প্ৰয়োজনীয় package

FastAPI Python-ৰ এটা web framework। ইয়াত type hints আৰু Pydantic-ৰ সহায়ত request validation আৰু API documentation পোৱা যায়।

এই অধ্যায়ৰ উদাহৰণসমূহৰ বাবে Python 3.10+ আৰু package-সমূহ install কৰিব লাগিব:

\`\`\`bash
pip install fastapi uvicorn "pydantic[email]" pwdlib[argon2] PyJWT
\`\`\`

API চলাবলৈ:

\`\`\`bash
uvicorn main:app --reload
\`\`\`

ইয়াত \`main.py\`-ত FastAPI instance-ৰ নাম \`app\` বুলি ধৰা হৈছে। \`--reload\` কেৱল development-ৰ সুবিধাৰ বাবে; production-ত ব্যৱহাৰ নকৰিব।

## ১৬.৩ FastAPI application আৰু Lifespan

Application আৰম্ভ আৰু বন্ধ হোৱাৰ সময়ত resource setup আৰু cleanup কৰিবৰ বাবে lifespan ব্যৱহাৰ কৰিব পাৰি।

\`\`\`python
from contextlib import asynccontextmanager
from fastapi import FastAPI


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Application আৰম্ভ হ'ল")
    # ইয়াত database pool বা আন resource initialize কৰিব পাৰি
    yield
    # Application বন্ধ হোৱাৰ আগতে resource বন্ধ কৰক
    print("Application বন্ধ হ'ল")


app = FastAPI(
    title="অসমীয়া শিক্ষামূলক API",
    version="1.0.0",
    lifespan=lifespan,
)


@app.get("/health")
async def health_check():
    return {"status": "ok"}
\`\`\`

Server চলিলে \`/docs\`-ত interactive Swagger documentation আৰু \`/redoc\`-ত ReDoc documentation চাব পাৰি। এই endpoint-সমূহৰ availability deployment configuration-ৰ ওপৰত নিৰ্ভৰ কৰে।

## ১৬.৪ Pydantic V2-ৰে Input Validation

Client-ৰ পৰা অহা data বিশ্বাস কৰিব নালাগে। Pydantic model-এ field type আৰু constraint validate কৰে।

\`\`\`python
from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserCreate(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    username: str = Field(min_length=3, max_length=50)
    email: EmailStr
    age: int = Field(ge=18, le=120)


class UserPublic(BaseModel):
    id: int
    username: str
    email: EmailStr
    age: int
\`\`\`

- \`UserCreate\` হৈছে client-এ পঠোৱা input model।
- \`UserPublic\` হৈছে client-ক দেখুওৱা response model।
- \`Field\`-এ length আৰু numeric range-ৰ দৰে constraint নিৰ্ধাৰণ কৰে।
- \`EmailStr\` ব্যৱহাৰ কৰিবলৈ email validation dependency install কৰিব লাগে।

Password-ৰ দৰে secret field response model-ত অন্তৰ্ভুক্ত নকৰিব।

## ১৬.৫ CRUD API-ৰ শিক্ষামূলক উদাহৰণ

তলৰ উদাহৰণত in-memory dictionary ব্যৱহাৰ কৰা হৈছে। Server restart হ'লে data হেৰাই যাব; একাধিক worker-ৰ মাজত data share নহয়। সেয়েহে এইটো database-ৰ বিকল্প নহয় আৰু production storage বুলি গণ্য কৰিব নালাগে।

\`\`\`python
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, ConfigDict, EmailStr, Field

app = FastAPI(title="Learning User API")

class UserCreate(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)
    username: str = Field(min_length=3, max_length=50)
    email: EmailStr
    age: int = Field(ge=18, le=120)

class UserPublic(UserCreate):
    id: int

users: dict[int, dict] = {}
next_id = 1


@app.post(
    "/users",
    response_model=UserPublic,
    status_code=status.HTTP_201_CREATED,
)
def create_user(payload: UserCreate):
    global next_id

    if any(user["email"] == str(payload.email) for user in users.values()):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="এই email ইতিমধ্যে ব্যৱহৃত হৈছে",
        )

    record = payload.model_dump()
    record["email"] = str(payload.email)
    record["id"] = next_id
    users[next_id] = record
    next_id += 1
    return record


@app.get("/users", response_model=list[UserPublic])
def list_users():
    return list(users.values())


@app.get("/users/{user_id}", response_model=UserPublic)
def get_user(user_id: int):
    user = users.get(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="ব্যৱহাৰকাৰী পোৱা নগ'ল")
    return user


@app.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="ব্যৱহাৰকাৰী পোৱা নগ'ল")
    del users[user_id]
    return None
\`\`\`

এই code-টো CRUD আৰু response model বুজাবলৈ। ইয়াত login, authorization, persistent database, concurrency control বা production-grade uniqueness constraint নাই। বাস্তৱ service-ত database transaction আৰু unique index ব্যৱহাৰ কৰিব লাগে।

## ১৬.৬ Dependency Injection

FastAPI-ৰ \`Depends\`-এ common logic endpoint-সমূহত পুনৰ ব্যৱহাৰ কৰিবলৈ সহায় কৰে।

\`\`\`python
from typing import Annotated
from fastapi import Depends, FastAPI, Header, HTTPException

app = FastAPI()


def require_client_key(
    client_key: Annotated[str | None, Header()] = None,
):
    if client_key != "development-only-key":
        raise HTTPException(status_code=401, detail="Invalid client key")
    return client_key


@app.get("/private-info")
def private_info(
    key: Annotated[str, Depends(require_client_key)],
):
    return {"message": "Access granted"}
\`\`\`

এইটো কেৱল dependency injection বুজাবলৈ development example। Code-ত দেখুওৱা static key বাস্তৱ authentication নহয়; production-ত secret manager, proper identity verification আৰু authorization ব্যৱস্থা লাগে।

## ১৬.৭ Password Hashing

Password কেতিয়াও plain text ৰূপত database-ত সংৰক্ষণ কৰিব নালাগে। Password hashing-ৰ বাবে Argon2-ৰ দৰে password hashing algorithm ব্যৱহাৰ কৰিব পাৰি।

\`\`\`python
from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, stored_hash: str) -> bool:
    return password_hash.verify(password, stored_hash)


hashed = hash_password("a-long-example-password")
print(verify_password("a-long-example-password", hashed))
\`\`\`

- Hashing encryption নহয়; সাধাৰণতে hash-ৰ পৰা মূল password উলিয়াব নোৱাৰি।
- প্ৰতিটো password-ৰ বাবে library-এ salt ব্যৱস্থাপনা কৰে।
- Password-ৰ ন্যূনতম দৈৰ্ঘ্য আৰু rate limiting-ও প্ৰয়োজন।
- Password বা hash log-ত লিখিব নালাগে।

## ১৬.৮ JWT Access Token-ৰ ধাৰণা

JWT (JSON Web Token)-এ signed claim বহন কৰে। সাধাৰণতে access token-ত user identifier আৰু expiry time থাকে।

**গুৰুত্বপূৰ্ণ:** Signed JWT encrypted নহয়। Token-ৰ payload-ত password, API key বা গোপন ব্যক্তিগত তথ্য নাৰাখিব।

তলৰ code-টো token সৃষ্টি আৰু expiry বুজাবলৈ। ইয়াত secret environment variable-ৰ পৰা লোৱা হৈছে।

\`\`\`python
import os
from datetime import datetime, timedelta, timezone
import jwt

SECRET_KEY = os.environ["JWT_SECRET_KEY"]
ALGORITHM = "HS256"


def create_access_token(user_id: str) -> str:
    now = datetime.now(timezone.utc)
    payload = {
        "sub": user_id,
        "iat": now,
        "exp": now + timedelta(minutes=15),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str) -> dict:
    return jwt.decode(
        token,
        SECRET_KEY,
        algorithms=[ALGORITHM],
        options={"require": ["sub", "exp"]},
    )
\`\`\`

Environment variable set নকৰিলে application-এ secret load কৰিব নোৱাৰিব। Secret-টো source code বা Git repository-ত commit নকৰিব। Production-ত secret যথেষ্ট শক্তিশালী আৰু গোপন ৰাখিব, token revocation/rotation strategy নিৰ্ধাৰণ কৰিব আৰু HTTPS বাধ্যতামূলক কৰিব।

## ১৬.৯ Authentication আৰু Authorization

- **Authentication:** ব্যৱহাৰকাৰী কোন সেয়া যাচাই কৰা।
- **Authorization:** সেই ব্যৱহাৰকাৰীয়ে কোন resource বা action ব্যৱহাৰ কৰিব পাৰে সেয়া নিৰ্ধাৰণ কৰা।

JWT valid হ'লেই সকলো user-ৰ সকলো data চোৱাৰ অনুমতি নাথাকে। প্ৰতিটো protected endpoint-ত resource ownership আৰু role permission পৰীক্ষা কৰিব লাগে।

উদাহৰণ: এজন user-এ নিজৰ profile update কৰিব পাৰে, কিন্তু আন user-ৰ profile নহয়। এই নিয়ম server-side-ত enforce কৰিব লাগিব; কেৱল frontend button লুকুৱাই ৰাখিলে সুৰক্ষা নহয়।

## ১৬.১০ API Testing

FastAPI-ৰ \`TestClient\`-এ HTTP endpoint পৰীক্ষা কৰিবলৈ সহায় কৰে। Test-ৰ বাবে \`httpx\` install কৰিব লাগে।

\`\`\`python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_health_endpoint():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
\`\`\`

Test-ত সফল response-ৰ লগতে invalid input, missing field, duplicate email, unauthorized request, nonexistent resource আৰু permission failure-ও পৰীক্ষা কৰিব লাগে। ওপৰৰ test-টো কেৱল health endpoint-ৰ উদাহৰণ; এই অধ্যায়ৰ সকলো code test কৰা হৈছে বুলি ইয়াৰ অৰ্থ নহয়।

## ১৬.১১ Production-লৈ নিয়াৰ আগতে

Production-ready API-ৰ বাবে কেৱল FastAPI code যথেষ্ট নহয়। তলৰ বিষয়সমূহো প্ৰয়োজন:

1. Persistent database আৰু migration।
2. Database transaction আৰু uniqueness constraint।
3. Password hashing আৰু secure login flow।
4. Endpoint-ভিত্তিক authorization আৰু ownership checks।
5. HTTPS, secret management আৰু token expiry।
6. Rate limiting আৰু request size limit।
7. Structured logging আৰু sensitive data redaction।
8. Automated tests আৰু dependency updates।
9. Backup, monitoring আৰু error alert।
10. CORS-ৰ সঠিক allowlist; সকলো origin-লৈ উন্মুক্ত নকৰা।

এই অধ্যায়ৰ উদাহৰণসমূহ শিক্ষামূলক। বাস্তৱ ব্যৱহাৰৰ আগতে security review, database design, deployment configuration আৰু test কৰিব লাগিব।

## ১৬.১২ সাধাৰণ ভুল

1. Password plain text-ত সংৰক্ষণ কৰা।
2. JWT secret source code-ত লিখা।
3. JWT payload encrypted বুলি ধৰি লোৱা।
4. সকলো user-ক সকলো resource-ৰ access দিয়া।
5. Response model-ত password বা secret field ৰখা।
6. In-memory dictionary-ক production database বুলি ধৰা।
7. সকলো error-ৰ বাবে 200 status code দিয়া।
8. Input validation নকৰা।
9. HTTPS আৰু rate limiting উপেক্ষা কৰা।
10. Development server-ৰ \`--reload\` production-ত ব্যৱহাৰ কৰা।

## ১৬.১৩ অনুশীলনী

1. REST API কি?
2. GET আৰু POST-ৰ পাৰ্থক্য লিখক।
3. PUT আৰু PATCH কেতিয়া ব্যৱহাৰ কৰা হয়?
4. HTTP 201 আৰু 404-ৰ অৰ্থ কি?
5. FastAPI-ত \`/docs\`-ৰ কাম কি?
6. Pydantic model-এ কি সুবিধা দিয়ে?
7. Request model আৰু response model পৃথক কিয়?
8. Dependency Injection কি?
9. Password plain text-ত সংৰক্ষণ কৰা উচিত নে?
10. Password hashing আৰু encryption-ৰ পাৰ্থক্য কি?
11. JWT payload-ত secret ৰাখিব পাৰিনে?
12. Authentication আৰু Authorization-ৰ পাৰ্থক্য কি?
13. In-memory dictionary production database নহয় কিয়?
14. Rate limiting কিয় প্ৰয়োজন?
15. API testing-ত কোন কোন failure case পৰীক্ষা কৰিব লাগে?

### উত্তৰ-সূচী

1. Web system-সমূহৰ মাজত resource আৰু operation আদান-প্ৰদানৰ architectural style।
2. GET তথ্য পঢ়ে; POST সাধাৰণতে resource সৃষ্টি কৰে।
3. PUT-এ সম্পূৰ্ণ resource replace কৰে; PATCH-এ আংশিক update কৰে।
4. 201 মানে resource সৃষ্টি; 404 মানে resource পোৱা নগ'ল।
5. Interactive API documentation আৰু request পৰীক্ষাৰ সুবিধা।
6. Input data type আৰু constraint validate কৰে।
7. Client-লৈ secret field প্ৰকাশ নকৰিবলৈ আৰু input/output পৃথক কৰিবলৈ।
8. Shared dependency বা logic endpoint-ত inject কৰাৰ পদ্ধতি।
9. নালাগে; secure password hashing কৰিব লাগে।
10. Hashing একমুখী; encryption key-ৰে decrypt কৰিব পাৰি।
11. নালাগে; JWT signed হ'লেও payload সাধাৰণতে পঢ়িব পাৰি।
12. Authentication পৰিচয় যাচাই; Authorization অনুমতি নিৰ্ধাৰণ।
13. Restart-ত data হেৰায় আৰু বহু worker-ৰ মাজত share নহয়।
14. Abuse, brute-force আৰু অতিৰিক্ত request নিয়ন্ত্ৰণ কৰিবলৈ।
15. Invalid input, missing data, duplicate record, unauthorized access, not found আৰু permission failure।

## ১৬.১৪ সাৰাংশ

এই অধ্যায়ত REST API, HTTP method/status code, FastAPI, Pydantic V2, Lifespan, Dependency Injection, password hashing, JWT আৰু API testing-ৰ মৌলিক ধাৰণা আলোচনা কৰা হ'ল। শিক্ষামূলক উদাহৰণ আৰু production security-ৰ মাজৰ পাৰ্থক্য বুজাটো অতি গুৰুত্বপূৰ্ণ।

### অধিক অধ্যয়নৰ বাবে (Official Documentation)

- FastAPI: https://fastapi.tiangolo.com/
- FastAPI Security: https://fastapi.tiangolo.com/tutorial/security/
- Pydantic: https://docs.pydantic.dev/latest/
- Python JWT (PyJWT): https://pyjwt.readthedocs.io/
- pwdlib: https://frankie567.github.io/pwdlib/
- HTTP Semantics (RFC 9110): https://www.rfc-editor.org/rfc/rfc9110
\`,
    },
    id: 'ch-17',
      volume: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      title: 'অধ্যায় ২০: আধুনিক JavaScript (ES6+) আৰু React ১৯',
      subtitle: 'Modern ES2025 Features, React 19 Hooks, Server Components & Custom Hooks',
      estimatedReadTime: '10 min',
      topics: ['Modern JavaScript Features', 'React 19 Custom Hooks', 'React Server Components', 'State Optimization'],
      content: `## ২০.১ আধুনিক জাভাস্ক্রিপ্ট (ES6+ / ES2025)

\`\`\`javascript
// ১. Destructuring
const ব্যৱহাৰকাৰী = { নাম: "ৰিকু", বয়স: 25, ঠিকনা: { চহৰ: "গুৱাহাটী" } };
const { নাম, বয়স, ঠিকনা: { চহৰ } } = ব্যৱহাৰকাৰী;

// ২. Spread & Rest
const সংখ্যা = [1, 2, 3];
const নতুন = [...সংখ্যা, 4, 5];

// ৩. Async/Await with Error Handling
async function ডেটা_আনা(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("নেটৱৰ্ক ত্ৰুটি!");
    return await res.json();
  } catch (err) {
    console.error("ত্ৰুটি:", err.message);
    return null;
  }
}

// ৪. Optional Chaining & Nullish Coalescing
const চহৰ_নাম = ব্যৱহাৰকাৰী?.ঠিকনা?.চহৰ;
const মান = null ?? "ডিফল্ট মান";
\`\`\`

---

## ২০.২ React ১৯ কম্পোনেন্ট & Custom Hook

\`\`\`jsx
import React, { useState, useEffect } from 'react';

// Custom API Hook
export function useAPI(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        const json = await res.json();
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

export function UserDashboard() {
  const [filter, setFilter] = useState('');
  const { data, loading, error } = useAPI('/api/v1/users');

  if (loading) return <div>লোড হৈ আছে...</div>;
  if (error) return <div>ত্ৰুটি: {error}</div>;

  return (
    <div className="dashboard">
      <h1>ব্যৱহাৰকাৰী ডেশ্ববৰ্ড</h1>
      <input 
        placeholder="সন্ধান কৰক..." 
        value={filter} 
        onChange={e => setFilter(e.target.value)} 
      />
      <ul>
        {data.filter(u => u.name?.toLowerCase().includes(filter.toLowerCase())).map(u => (
          <li key={u.id}><strong>{u.name}</strong> — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\``,
    },
    {
      id: 'ch-18',
      volume: 'খণ্ড ৭: ফ্ৰণ্টএণ্ড আৰ্কিটেকচাৰ আৰু ফুলষ্টেক ইন্টিগ্ৰেচন',
      title: 'অধ্যায় ২১: ফুলষ্টেক ইন্টিগ্ৰেচন — React + FastAPI',
      subtitle: 'CORS Config, Centralized API Client, Token Auth & Form Handling',
      estimatedReadTime: '9 min',
      topics: ['CORS Middleware', 'Singleton API Client', 'Interactive User Form', 'Error Boundary'],
      content: `## ২১.১ CORS আৰু API ক্লায়েণ্ট

\`\`\`python
# FastAPI main.py ত CORS ছেটআপ
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
\`\`\`

\`\`\`javascript
// Centralized API Client (api.js)
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

class APIClient {
  async request(endpoint, options = {}) {
    const url = \`\${API_BASE}\${endpoint}\`;
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
      ...options.headers,
    };
    const response = await fetch(url, { ...options, headers });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.detail || \`HTTP \${response.status}\`);
    }
    return response.json();
  }

  get(endpoint) { return this.request(endpoint); }
  post(endpoint, body) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) }); }
}

export const api = new APIClient();
\`\`\``,
    },
    {
      id: 'ch-19',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২২: গিট আৰু CI/CD পাইপলাইন',
      subtitle: 'Git Workflow, Conventional Commits, GitHub Actions & VPS Automated Deployment',
      estimatedReadTime: '9 min',
      topics: ['Git Flow & Rebase', 'Conventional Commits', 'GitHub Actions Pipeline', 'Automated VPS Deployment'],
      content: `## ২২.১ গিট এছেন্সিয়েল ফ্ল’ (Git Essential Flow ২০২৬)

\`\`\`bash
# নতুন ব্ৰাঞ্চ সৃষ্টি
git checkout -b feature/jwt-auth

# Conventional Commits:
git add .
git commit -m "feat(auth): implement token verification"
git commit -m "fix(api): resolve CORS issue for production"
git commit -m "test(auth): add JWT expiry unit tests"

# GitHub ত পুশ আৰু PR সৃষ্টি
git push origin feature/jwt-auth
gh pr create --title "feat: JWT Authentication" --body "Complete auth integration"

# Rebase (পৰিষ্কাৰ ইতিহাস ৰাখিবলৈ)
git checkout feature/jwt-auth
git rebase main
\`\`\`

---

## ২২.২ GitHub Actions CI/CD (২০২৬)

\`\`\`yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.13'
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run Tests
        run: pytest --cov=app --cov-report=xml

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Build and Push Docker
        run: docker build -t codeyatra-api:latest .
\`\`\``,
    },
    {
      id: 'ch-20',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৩: Pytest আৰু টেষ্ট-ড্ৰিভন ডেভেলপমেণ্ট (TDD)',
      subtitle: 'TDD Red-Green-Refactor, Fixtures, Mocking & Property-Based Testing',
      estimatedReadTime: '8 min',
      topics: ['TDD Red-Green-Refactor', 'Pytest Fixtures', 'Mocking External APIs', 'Hypothesis Property Testing'],
      content: `## ২৩.১ TDD সোণালী চক্ৰ

1. **Red:** প্ৰথমে টেষ্ট লিখক যিটো ফেইল হয় (কাৰণ কোড নাই)।
2. **Green:** নূন্যতম কোড লিখক যাতে টেষ্টটো পাছ হয়।
3. **Refactor:** কোড পৰিষ্কাৰ আৰু অপটিমাইজ কৰক।

\`\`\`python
import pytest
from unittest.mock import patch

def যোগ(a: int, b: int) -> int:
    return a + b

def test_যোগ_মৌলিক():
    assert যোগ(2, 3) == 5
    assert যোগ(-1, 1) == 0

@pytest.fixture
def নমুনা_ব্যৱহাৰকাৰী():
    return {"নাম": "ৰিকু", "ইমেইল": "riku@test.com", "বয়স": 25}

def test_ব্যৱহাৰকাৰী_বৈধ(নমুনা_ব্যৱহাৰকাৰী):
    assert নমুনা_ব্যৱহাৰকাৰী["বয়স"] >= 18
    assert "@" in নমুনা_ব্যৱহাৰকাৰী["ইমেইল"]

# Mocking
def test_বাহ্যিক_API():
    with patch('requests.get') as mock_get:
        mock_get.return_value.json.return_value = {"status": "ok"}
        mock_get.return_value.status_code = 200
        # টেষ্ট সম্পন্ন কৰক
\`\`\``,
    },
    {
      id: 'ch-21',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৪: ডকাৰ আৰু কন্টেইনাৰাইজেশন',
      subtitle: 'Multi-stage Dockerfile, Non-root User Security & Docker Compose Full-Stack',
      estimatedReadTime: '9 min',
      topics: ['Multi-stage Dockerfile', 'Non-root Security', 'Docker Compose Multi-service', 'Docker BuildKit'],
      content: `## ২৪.১ Multi-stage Dockerfile (২০২৬ বেষ্ট প্ৰেক্টিছ)

\`\`\`dockerfile
# Builder Stage
FROM python:3.13-slim as builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends gcc && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# Final Production Stage
FROM python:3.13-slim
WORKDIR /app

# Non-root user for security
RUN groupadd -r appuser && useradd -r -g appuser appuser
COPY --from=builder /root/.local /home/appuser/.local
COPY . .

ENV PATH=/home/appuser/.local/bin:$PATH
USER appuser
EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8000/health || exit 1
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
\`\`\`

---

## ২৪.২ Docker Compose (পূৰ্ণাংগ ফুলষ্টেক ষ্টেক)

\`\`\`yaml
# docker-compose.yml
version: '3.9'
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/codeyatra
    depends_on:
      - db
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: codeyatra
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
\`\`\``,
    },
    {
      id: 'ch-22',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'অধ্যায় ২৫: এজ এআই, এনোমালি ডিটেকচন আৰু আধুনিক ট্ৰেণ্ড',
      subtitle: 'Z-Score Anomaly Detection, Scikit-Learn, SLMs, MCP & RAG Systems',
      estimatedReadTime: '10 min',
      topics: ['Z-Score Real-time Detection', 'Isolation Forest ML', 'Small Language Models (SLMs)', 'RAG & Vector Embeddings'],
      content: `## ২৫.১ Z-Score এনোমালি ডিটেকচন (IoT & Real-time)

\`\`\`python
import numpy as np
from collections import deque

class EdgeDetector:
    """IoT ডিভাইচৰ বাবে ৰিয়েল-টাইম এনোমালি ডিটেক্টৰ"""
    def __init__(self, limit=3.0, window_size=100):
        self.history = deque(maxlen=window_size)
        self.limit = limit
        
    def check(self, val: float) -> str:
        self.history.append(val)
        if len(self.history) < 10:
            return "CALIBRATING"
        mean = np.mean(self.history)
        std = np.std(self.history) + 1e-5
        z_score = abs(val - mean) / std
        return "ANOMALY" if z_score > self.limit else "NORMAL"

ed = EdgeDetector(limit=2.5)
readings = [220, 221, 219, 220, 245, 222, 218, 221, 300, 220]
for v in readings:
    print(f"ভোল্টেজ {v}V -> {ed.check(v)}")
\`\`\`

---

## ২৫.২ সৰল মেচিন লাৰ্নিং (Scikit-Learn Isolation Forest)

\`\`\`python
from sklearn.ensemble import IsolationForest
import numpy as np

# চেন্সৰ ৰিডিং ডেটা
X = np.array([
    [220], [221], [219], [220], [222],  # Normal
    [350], [10], [400]                  # Anomalies
])

clf = IsolationForest(contamination=0.2, random_state=42)
clf.fit(X)
predictions = clf.predict([[221], [380]])
# 1 = Normal, -1 = Anomaly
print("প্ৰেডিকচন (1=Normal, -1=Anomaly):", predictions)
\`\`\`

---

## ২৫.৩ ২০২৬ ৰ এআই ট্ৰেণ্ডসমূহ

- **Small Language Models (SLMs):** ডিভাইচতে অফলাইন চলিব পৰা ১B-৩B পেৰামিটাৰ মডেল।
- **Edge AI:** Raspberry Pi 5, Coral TPU ত অন-ডিভাইচ ইন্ফাৰেন্স।
- **MCP (Model Context Protocol):** এআই এজেন্ট আৰু ডাটাবেছৰ সংযোগী মানক।
- **RAG (Retrieval Augmented Generation):** ভেক্টৰ এম্বেডিঙৰ জৰিয়তে নিজা নলেজ বেচত এআই সন্ধান।`,
    },
    {
      id: 'ch-appendix',
      volume: 'খণ্ড ৮: প্ৰফেচনেল ডেভঅপ্স, এজ কম্পিউটিং, এআই আৰু ৰোডমেপ',
      title: 'পৰিশিষ্ট: ৬ মহীয়া এক্সপাৰ্ট ছফ্টৱেৰ ইঞ্জিনিয়াৰ হোৱাৰ ৰোডমেপ (২০২৬)',
      subtitle: 'Month-by-Month Mastery Plan & Recommended Resources',
      estimatedReadTime: '8 min',
      topics: ['6-Month Roadmap', 'Core Foundations to System Design', 'Recommended Books & Platforms'],
      content: `## ৬ মহীয়া এক্সপাৰ্ট ছফ্টৱেৰ ইঞ্জিনিয়াৰ হোৱাৰ ৰোডমেপ

### মাহ ১: Core Foundations & DSA
- **সপ্তাহ ১-২:** কম্পিউটাৰ আৰ্কিটেকচাৰ, বাইনাৰী, মেম'ৰি মডেল
- **সপ্তাহ ৩-৪:** পাইথন গভীৰতা (Mutable/Immutable, LEGB, Closures)
- **প্ৰকল্প:** CLI টুল (টু-ডু লিষ্ট মেনেজাৰ)
- **DSA ফোকাস:** এৰে, ষ্টেক, কিউ, লিংকড লিষ্ট, BST, গ্ৰাফ BFS/DFS, Big-O বিশ্লেষণ, মাৰ্জ ছৰ্ট, কুইক ছৰ্ট

---

### মাহ ২: OOP & Clean Code
- **সপ্তাহ ১-২:** OOP স্তম্ভ (Abstract, Inheritance, Polymorphism)
- **সপ্তাহ ৩:** SOLID নীতি, Design Patterns (Strategy, Factory, Singleton)
- **সপ্তাহ ৪:** ক্লিন কোড, Refactoring, Code Review কৌশল
- **প্ৰকল্প:** বেংক মেনেজমেন্ট চিষ্টেম (OOP + SOLID)

---

### মাহ ৩: Databases & Backend
- **সপ্তাহ ১-২:** SQL, PostgreSQL, ACID, Normalization, Indexing
- **সপ্তাহ ৩:** FastAPI, Pydantic V2, RESTful API Design
- **সপ্তাহ ৪:** JWT Auth, Middleware, API Documentation
- **প্ৰকল্প:** E-commerce Backend API (Users, Products, Orders)

---

### মাহ ৪: Full-Stack & Concurrency
- **সপ্তাহ ১-২:** JavaScript ES6+, React 19, Hooks, Server Components
- **সপ্তাহ ৩:** AsyncIO, WebSockets, Redis Caching
- **সপ্তাহ ৪:** React + FastAPI Integration, CORS, State Management
- **প্ৰকল্প:** ফুলষ্টেক টাস্ক মেনেজাৰ (Realtime updates)

---

### মাহ ৫: DevOps & Systems
- **সপ্তাহ ১:** Git Advanced, GitHub Actions CI/CD
- **সপ্তাহ ২:** Docker, Docker Compose, Multi-stage builds
- **সপ্তাহ ৩:** Linux চাৰ্ভাৰ, Nginx, SSL, Deployment
- **সপ্তাহ ৪:** Monitoring (Prometheus/Grafana), Logging
- **প্ৰকল্প:** Deploy your Full-Stack app to VPS/Cloud

---

### মাহ ৬: System Design & AI
- **সপ্তাহ ১-২:** System Design Basics (Load Balancing, Caching, DB Sharding)
- **সপ্তাহ ৩:** Microservices, Message Queues (RabbitMQ/Celery)
- **সপ্তাহ ৪:** Edge AI, Anomaly Detection, RAG Basics
- **কেপষ্টন প্ৰকল্প:** AI-এনেবল্ড ডেশ্ববৰ্ড (anomaly detection + real-time alerts)

---

## অতিৰিক্ত সম্পদ (২০২৬)

### পঢ়িবলগীয়া কিতাপ:
- *"Clean Code"* — Robert C. Martin
- *"Designing Data-Intensive Applications"* — Martin Kleppmann
- *"Python Cookbook"* — David Beazley
- *"The Pragmatic Programmer"* — Andrew Hunt

### অনলাইন প্লেটফৰ্ম:
- **LeetCode:** DSA প্ৰেক্টিচ
- **HackerRank:** পাইথন, SQL প্ৰেক্টিচ
- **Frontend Masters:** React, System Design
- **AWS Free Tier:** ক্লাউড প্ৰেক্টিচ

> *"প্ৰগ্ৰামিং এটা কলা নহয়, এটা দক্ষতা—দিনে দিনে শিকিব লাগে, দিনে দিনে শুধৰাব লাগে।"*
> — কোড-যাত্ৰা মহাপুথি, ২০২৬`,
    },
  ],
};

export const SAMPLE_BOOKS: Book[] = [
  CODE_YATRA_BOOK,
  {
    id: 'ai-engineering-2026',
    title: 'The AI Engineer Handbook: From LLMs to Autonomous Agents',
    subtitle: 'Production Guide to Prompt Engineering, RAG, Fine-Tuning & Multi-Agent Systems',
    author: 'DeepMind & Cloud AI Architects',
    edition: '2026 Ultimate Edition',
    publishedYear: '2026',
    language: 'English',
    isbn: 'ISBN 978-0-13-456789-0',
    copyright: '© 2026 AI Engineering Institute. Open Knowledge Edition.',
    description: 'An authoritative manual covering architectural patterns for modern Generative AI, embeddings, vector databases, MCP protocol, and production deployment.',
    coverColor: '#1e1b4b',
    coverBadge: 'Official 2026 Edition',
    coverStyle: 'tech',
    tags: ['AI', 'LLMs', 'Gemini', 'RAG', 'Agentic AI', 'Vector DB', 'MCP'],
    createdAt: '2026-02-15T00:00:00.000Z',
    updatedAt: '2026-08-20T00:00:00.000Z',
    chapters: [
      {
        id: 'ai-ch1',
        title: 'Chapter 1: The New AI Stack in 2026',
        subtitle: 'From Static Models to Thinking Engines and Tool-Augmented Agents',
        volume: 'Part 1: Foundational Paradigms',
        estimatedReadTime: '7 min',
        topics: ['Thinking Models', 'Function Calling', 'Context Windows', 'Multimodality'],
        content: `## 22.1 The Evolution of Foundation Models

In 2026, AI architecture shifted from basic prompt-response chatbots to **Agentic Systems** that reason iteratively, invoke tools, and maintain persistent state.

### Core Tenets of the Modern Stack:
1. **Thinking Capabilities:** Multi-turn internal chain-of-thought verification before producing output.
2. **Standardized Context Protocols (MCP):** Dynamic schema discovery and remote resource binding.
3. **Hybrid Search & Grounding:** Combining dense vector retrieval with real-time web search and relational facts.

\`\`\`typescript
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Generating structured intelligence with tool calling
const response = await ai.models.generateContent({
  model: "gemini-3.7-flash",
  contents: "Analyze this system log and pinpoint any anomaly pattern",
});
console.log(response.text);
\`\`\``,
      },
      {
        id: 'ai-ch2',
        title: 'Chapter 2: Production-Grade RAG Architecture',
        subtitle: 'Chunking, Embeddings, Hybrid Search & Re-ranking',
        volume: 'Part 2: Knowledge Systems',
        estimatedReadTime: '8 min',
        topics: ['Semantic Chunking', 'Vector Indexing', 'Cross-Encoders', 'Evaluation'],
        content: `## 22.1 Why Naive RAG Fails in Enterprise

Traditional top-k vector cosine similarity struggles with tabular data, negation, and temporal queries. Production RAG requires:
- **Hierarchical Chunking:** Preserving document parent headers and tables.
- **Hybrid Retrieval:** BM25 lexical search + dense embeddings.
- **Cross-Encoder Re-ranking:** Re-ordering the top 50 candidates down to the top 5 most relevant passages.`,
      },
    ],
  },
  {
    id: 'hindi-python-masterclass',
    title: 'पायथन एवं सॉफ्टवेयर इंजीनियरिंग सम्पूर्ण मार्गदर्शिका',
    subtitle: 'शून्य से एडवांस्ड डेवलपर बनने की संपूर्ण यात्रा — २०२६ संस्करण',
    author: 'भारत टेक कम्युनिटी',
    edition: '२०२६ हिंदी संस्करण',
    publishedYear: '2026',
    language: 'हिन्दी (Hindi)',
    isbn: 'ISBN 978-81-923456-7-8',
    copyright: '© २०२६ सर्वाधिकार सुरक्षित। ओपन सोर्स और मुफ्त शिक्षा के लिए समर्पित।',
    description: 'सरल हिंदी भाषा में कंप्यूटर साइंस, पायथन प्रोग्रामिंग, डेटा स्ट्रक्चर्स, वेब डेवलपमेंट और क्लाउड डेवऑप्स का संपूर्ण ज्ञान।',
    coverColor: '#831843',
    coverBadge: 'हिंदी मास्टरक्लास २०२६',
    coverStyle: 'royal',
    tags: ['Python', 'DSA', 'FastAPI', 'Backend', 'DevOps', 'Hindi Guide'],
    createdAt: '2026-03-01T00:00:00.000Z',
    updatedAt: '2026-08-25T00:00:00.000Z',
    chapters: [
      {
        id: 'hi-ch1',
        title: 'अध्याय १: पायथन का परिचय और कंप्यूटर फंडामेंटल्स',
        subtitle: 'कंप्यूटर कैसे सोचता है और पायथन इतना लोकप्रिय क्यों है?',
        volume: 'भाग १: बुनियादी सिद्धांत',
        estimatedReadTime: '6 min',
        topics: ['Memory & CPU', 'Python Syntax', 'Variables & Data Types'],
        content: `## १.१ पायथन क्या है और यह क्यों खास है?

पायथन एक उच्च-स्तरीय (High-level), इंटरप्रिटेड प्रोग्रामिंग भाषा है जिसे पढ़ना और लिखना अंग्रेजी की तरह बहुत आसान है।

\`\`\`python
# पहला पायथन प्रोग्राम
def स्वागत(नाम: str):
    print(f"नमस्ते {नाम}! कोडिंग की रोमांचक दुनिया में आपका स्वागत है।")

स्वागत("विकास")
\`\`\`

### मुख्य विशेषताएं:
- **सरल सिंटेक्स:** शुरुआती लोगों के लिए सबसे आसान।
- **विशाल लाइब्रेरी इकोसिस्टम:** AI, वेब डेवलपमेंट, डेटा साइंस के लिए समृद्ध लाइब्रेरी।
- **क्रॉस-प्लेटफ़ॉर्म:** विंडोज, मैक, लिनक्स सभी पर सुचारू रूप से चलता है।`,
      },
    ],
  },
];
