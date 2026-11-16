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
      subtitle: 'I/O Streams, Fast I/O in Python আৰু File Buffering',
      estimatedReadTime: '6 min',
      topics: ['I/O Cycle', 'Standard Streams', 'Competitive Programming Fast I/O', 'Memory Buffers'],
      content: `## ৩.১ আই/অ' চাইকেল (I/O Cycle)

কম্পিউটাৰৰ মৌলিক কাৰ্য—ইনপুট গ্ৰহণ, প্ৰচেছিং আৰু আউটপুট প্ৰদান।

\`\`\`python
import sys

def দ্ৰুত_ইনপুট_আউটপুট():
    # মানক ইনপুট পদ্ধতি
    নাম = input("আপোনাৰ নাম লিখক: ")
    বয়স = int(input("আপোনাৰ বয়স লিখক: "))
    
    # ফৰমেটেড আউটপুট
    print(f"নমস্কাৰ {নাম}! আপুনি {বয়স} বছৰীয়া।")
    
    # দ্ৰুত আই/অ' (Competitive Programming ৰ বাবে)
    ডেটা = sys.stdin.readline().strip()
    sys.stdout.write(f"পঠিত ডেটা: {ডেটা}\\n")
    sys.stdout.flush()  # বাফাৰ খালী কৰা
\`\`\`

---

## ৩.২ বাফাৰ (Buffer) আৰু ষ্ট্ৰীম

**বাফাৰ** হ'ল এটা অস্থায়ী সঞ্চয়স্থল য'ত ডেটা আগবঢ়াৰ আগতে জমা ৰখা হয়। **ষ্ট্ৰীম** হ'ল ডেটাৰ একতাৰিক ক্ৰম।

\`\`\`python
# ফাইল ষ্ট্ৰীমিং (স্মাৰ্ট বাফাৰ ব্যৱহাৰ)
with open("বিশাল_ফাইল.txt", "r", buffering=8192) as ফ:
    # ৮KB বাফাৰ ব্যৱহাৰ কৰি এক এক লাইন পঢ়া
    for লাইন_নং, লাইন in enumerate(ফ, 1):
        if "মুখ্য_শব্দ" in লাইন:
            print(f"লাইন {লাইন_নং}: {লাইন.strip()}")
\`\`\``,
    },
    {
      id: 'ch-4',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৪: মেম’ৰি মডেল, টাইপ চিষ্টেম আৰু চলকৰ সত্যতা',
      subtitle: 'Objects, Mutable vs Immutable, Deep Copy আৰু Truthiness',
      estimatedReadTime: '9 min',
      topics: ['Python Object Model', 'Mutable vs Immutable', 'Shallow vs Deep Copy', 'Truthy and Falsy'],
      content: `## ৪.১ পাইথনত সকলো বস্তুৱেই এটা অবজেক্ট

পাইথনত \`int\`, \`str\`, \`list\`, \`function\` —সকলোবোৰেই অবজেক্ট। প্ৰতিটো অবজেক্টৰ তিনিটা মৌলিক বৈশিষ্ট্য থাকে:
- **আইডি (Identity):** মেম'ৰি ঠিকনা (\`id()\` ফাংচনত পোৱা যায়)
- **টাইপ (Type):** অবজেক্টৰ শ্ৰেণী (\`type()\`)
- **মান (Value):** সংৰক্ষিত ডেটা

\`\`\`python
a = 256
print(id(a))          # মেম'ৰি ঠিকনা
print(type(a))        # <class 'int'>

# পাইথনে -৫ ৰ পৰা ২৫৬ লৈ সংখ্যাবোৰ কেচ (cache) কৰে:
b = 256
print(a is b)         # True (একে মেম'ৰি ঠিকনা)

c = 257
d = 257
print(c is d)         # False (আলাদা অবজেক্ট)
\`\`\`

---

## ৪.২ Mutable বনাম Immutable

| প্ৰকাৰ | ডেটা টাইপ | বৈশিষ্ট্য |
| :--- | :--- | :--- |
| **Immutable** | \`int\`, \`float\`, \`str\`, \`tuple\`, \`frozenset\`, \`bool\` | মেম'ৰিত সলনি কৰিব নোৱাৰি; নতুন অবজেক্ট সৃষ্টি হয় |
| **Mutable** | \`list\`, \`dict\`, \`set\`, Custom Classes | In-place উপাদান সলনি কৰিব পাৰি |

\`\`\`python
# Immutable উদাহৰণ
x = "অসম"
print(id(x))    # ঠিকনা ১
x += "ীয়া"
print(id(x))    # ঠিকনা ২ (নতুন অবজেক্ট)

# Mutable উদাহৰণ
y = [1, 2, 3]
print(id(y))    # ঠিকনা A
y.append(4)
print(id(y))    # ঠিকনা A (একে ঠিকনা)
\`\`\`

---

## ৪.৩ Shallow Copy বনাম Deep Copy

\`\`\`python
import copy

মূল = [[1, 2], [3, 4], [5, 6]]

# Shallow Copy: ভিতৰৰ তালিকাসমূহ একেই থাকে
আংশিক = copy.copy(মূল)
মূল[0][0] = 99
print(আংশিক[0][0])  # ৯৯ (প্ৰভাৱিত হ'ল!)

# Deep Copy: সম্পূৰ্ণ নতুন স্বতন্ত্ৰ ক্লোন
গভীৰ = copy.deepcopy(মূল)
মূল[1][1] = 88
print(গভীৰ[1][1])   # ৪ (অপ্ৰভাৱিত)
\`\`\`

---

## ৪.৪ চলকৰ সত্যতা (Truthiness)

\`\`\`python
# falsy মানসমূহ:
# 0, 0.0, "", [], {}, set(), None, False

def পৰীক্ষা(মান):
    if মান:
        return f"{মান!r} হ'ল Truthy"
    return f"{মান!r} হ'ল Falsy"

print(পৰীক্ষা([]))      # Falsy
print(পৰীক্ষা([0]))     # Truthy
print(পৰীক্ষা("অসম"))   # Truthy
\`\`\``,
    },
    {
      id: 'ch-5',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৫: আধুনিক নিয়ন্ত্ৰণ প্ৰৱাহ আৰু পেটাৰ্ণ মেচিং',
      subtitle: 'Structural Pattern Matching (Python 3.10+), Enumerate & Itertools',
      estimatedReadTime: '8 min',
      topics: ['Pattern Matching', 'Destructuring in Match', 'Enumerate & Zip', 'Itertools'],
      content: `## ৫.১ Structural Pattern Matching (Python 3.10+)

আধুনিক পাইথনত \`match-case\` ব্যৱহাৰ কৰি জটিল ডেটা সহজে মেচ কৰা সম্ভৱ:

\`\`\`python
def আদেশ_প্ৰচেছ_কৰা(কমাণ্ড: dict):
    match কমাণ্ড:
        # কেচ ১: গতি সংক্ৰান্ত আদেশ
        case {"action": "move", "direction": ("north" | "south" | "east" | "west") as d, "steps": int(s)}:
            return f"ৰব'ট {s} খোজ {d} দিশত আগবাঢ়িল।"
        
        # কেচ ২: বিশ্ৰামৰ আদেশ
        case {"action": "sleep", "duration": int(secs)}:
            return f"ৰব'ট {secs} ছেকেণ্ডৰ বাবে জিৰণি লৈছে।"
            
        # কেচ ৩: আক্ৰমণৰ আদেশ
        case {"action": "attack", "target": str(t), "weapon": str(w)}:
            return f"{t}ক {w}ৰে আক্ৰমণ কৰা হ'ল!"
            
        # কেচ ৪: তালিকাৰ পেটাৰ্ণ
        case [x, y, *বাকী]:
            return f"প্ৰথম দুটা: {x}, {y}; বাকী: {বাকী}"
            
        # ডিফল্ট কেচ
        case _:
            return "অজ্ঞাত আদেশ!"

# টেষ্ট
print(আদেশ_প্ৰচেছ_কৰা({"action": "move", "direction": "north", "steps": 5}))
print(আদেশ_প্ৰচেছ_কৰা([10, 20, 30, 40]))
print(আদেশ_প্ৰচেছ_কৰা({"action": "dance"}))
\`\`\`

---

## ৫.২ এডভান্সড লুপিং (Advanced Looping)

\`\`\`python
# enumerate ব্যৱহাৰ
ফলসমূহ = ["আপেল", "কলা", "আঙুৰ"]
for সূচী, ফল in enumerate(ফলসমূহ, 1):
    print(f"{সূচী}. {ফল}")

# zip ব্যৱহাৰ
নাম = ["ৰিকু", "জয়ন্ত", "প্ৰিয়া"]
বয়স = [25, 30, 22]
for ন, ব in zip(নাম, বয়স):
    print(f"{ন}: {ব} বছৰ")

# itertools সংমিশ্ৰণ
from itertools import combinations
print(list(combinations([1, 2, 3], 2)))  # [(1, 2), (1, 3), (2, 3)]
\`\`\``,
    },
    {
      id: 'ch-6',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৬: লুপ, ইটাৰেটৰ প্ৰট’কল আৰু জেনেৰেটৰ',
      subtitle: 'Iterator Protocol, Generators, Yield আৰু Context Managers',
      estimatedReadTime: '8 min',
      topics: ['__iter__ and __next__', 'Generators & Yield', 'Generator Expressions', 'Context Managers'],
      content: `## ৬.১ ইটাৰেটৰ প্ৰট’কল (Iterator Protocol)

পাইথনত কোনো অবজেক্টত \`__iter__()\` আৰু \`__next__()\` মেথড থাকিলে সি ইটাৰেবল হয়।

\`\`\`python
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

for সংখ্যা in গণনা_ইটাৰেটৰ(5, 10):
    print(সংখ্যা, end=" ")  # 5 6 7 8 9
\`\`\`

---

## ৬.২ জেনেৰেটৰ (Generators)

জেনেৰেটৰ ফাংচনে \`yield\` ব্যৱহাৰ কৰে। ই মেম'ৰি সঞ্চয় কৰে কাৰণ ই একেবাৰে সকলো মান সৃষ্টি নকৰে।

\`\`\`python
def অসীম_ফিবোনাচি():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

ফিবো = অসীম_ফিবোনাচি()
for _ in range(10):
    print(next(ফিবো), end=" ")  # 0 1 1 2 3 5 8 13 21 34

# জেনেৰেটৰ এক্সপ্ৰেচন (মেম'ৰি ফ্ৰেণ্ডলী)
বৰ্গ = (x**2 for x in range(1000000))
print(next(বৰ্গ))  # 0
print(next(বৰ্গ))  # 1
\`\`\`

---

## ৬.৩ কন্টেক্সট মেনেজাৰ (Context Manager)

\`\`\`python
class নিৰাপদ_ফাইল:
    def __init__(self, নাম, মোড):
        self.নাম = নাম
        self.মোড = মোড
        
    def __enter__(self):
        self.ফাইল = open(self.নাম, self.মোড)
        print(f"'{self.নাম}' খোলা হ'ল।")
        return self.ফাইল
        
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.ফাইল.close()
        print(f"'{self.নাম}' বন্ধ কৰা হ'ল।")
        return True

with নিৰাপদ_ফাইল("টেষ্ট.txt", "w") as ফ:
    ফ.write("অসমীয়া পাইথন মাষ্টাৰক্লাছ!")
\`\`\``,
    },
    {
      id: 'ch-7',
      volume: 'খণ্ড ২: পাইথন প্ৰগ্ৰামিংৰ গভীৰতা',
      title: 'অধ্যায় ৭: ফাংচন, স্কোপ (LEGB), ক্ল’জাৰ আৰু ডেকৰেটৰ',
      subtitle: 'LEGB Scope Rule, Closures আৰু Practical Decorators',
      estimatedReadTime: '8 min',
      topics: ['LEGB Rule', 'Closures', 'Decorators', 'Performance Profiler Decorator'],
      content: `## ৭.১ LEGB নিয়ম (Scope Resolution)

পাইথনে চলক বিচাৰি পাবলৈ এই ক্ৰম অনুসৰণ কৰে:
**Local -> Enclosing -> Global -> Built-in**

\`\`\`python
x = "গ্ল'বেল"  # Global

def বাহ্যিক():
    x = "এনক্ল'জিং"  # Enclosing
    def ভিতৰৰ():
        x = "লোকেল"  # Local
        print(x)
    ভিতৰৰ()

বাহ্যিক()  # আউটপুট: লোকেল
\`\`\`

---

## ৭.২ ক্ল'জাৰ (Closure)

\`\`\`python
def গুণক_তৈয়াৰ_কৰা(গুণনীয়ক):
    def গুণক(সংখ্যা):
        return সংখ্যা * গুণনীয়ক
    return গুণক

দ্বিগুণ = গুণক_তৈয়াৰ_কৰা(2)
ত্ৰিগুণ = গুণক_তৈয়াৰ_কৰা(3)

print(দ্বিগুণ(5))  # ১০
print(ত্ৰিগুণ(5))  # ১৫
\`\`\`

---

## ৭.৩ ডেকৰেটৰ (Decorators)

\`\`\`python
import time
from functools import wraps

def সময়_গণনা_ডেকৰেটৰ(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        আৰম্ভণি = time.perf_counter()
        ফলাফল = func(*args, **kwargs)
        শেষ = time.perf_counter()
        print(f"'{func.__name__}' সমাপ্ত হ'বলৈ সময় লাগিল: {শেষ - আৰম্ভণি:.6f}s")
        return ফলাফল
    return wrapper

@সময়_গণনা_ডেকৰেটৰ
def গাণিতিক_হিচাপ(n: int):
    return sum(i * i for i in range(n))

গাণিতিক_হিচাপ(1_000_000)
\`\`\``,
    },
    {
      id: 'ch-8',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৮: লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ',
      subtitle: 'Dynamic Array, Stack (LIFO), Queue (FIFO) আৰু Linked List',
      estimatedReadTime: '11 min',
      topics: ['Dynamic Array', 'Stack & Valid Parentheses', 'Queue (deque)', 'Singly Linked List'],
      content: `## ৮.১ তালিকা (Dynamic Array Implementation)

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
        if not 0 <= সূচী < self.গণনা:
            raise IndexError("সূচী বাহিৰত!")
        return self.ধাৰক[সূচী]
        
    def __len__(self):
        return self.গণনা

# ব্যৱহাৰ
arr = ডাইনামিক_এৰে()
for i in range(5):
    arr.যোগ(i * 10)
print([arr[i] for i in range(len(arr))])  # [0, 10, 20, 30, 40]
\`\`\`

---

## ৮.২ ষ্টেক (Stack) - LIFO

\`\`\`python
class ষ্টেক:
    def __init__(self):
        self.তালিকা = []
    def ঠিলা(self, মান):
        self.তালিকা.append(মান)
    def উলিওৱা(self):
        if self.খালী():
            raise IndexError("ষ্টেক খালী!")
        return self.তালিকা.pop()
    def শীৰ্ষ(self):
        return self.তালিকা[-1] if not self.খালী() else None
    def খালী(self):
        return len(self.তালিকা) == 0

# সমস্যা সমাধান: বন্ধনী মিলোৱা (Valid Parentheses)
def বন্ধনী_মিল_কিনা(বাক্য: str) -> bool:
    জোড়া = {')': '(', '}': '{', ']': '['}
    স্তূপ = ষ্টেক()
    for অক্ষৰ in বাক্য:
        if অক্ষৰ in "({[":
            স্তূপ.ঠিলা(অক্ষৰ)
        elif অক্ষৰ in ")}]":
            if স্তূপ.খালী() or স্তূপ.উলিওৱা() != জোড়া[অক্ষৰ]:
                return False
    return স্তূপ.খালী()

print(বন্ধনী_মিল_কিনা("({[]})"))  # True
print(বন্ধনী_মিল_কিনা("({[})"))   # False
\`\`\`

---

## ৮.৩ কিউ (Queue) - FIFO

\`\`\`python
from collections import deque

class কিউ:
    def __init__(self):
        self.ধাৰক = deque()
    def যোগ(self, মান):
        self.ধাৰক.append(মান)
    def আঁতৰাও(self):
        if self.খালী():
            raise IndexError("কিউ খালী!")
        return self.ধাৰক.popleft()
    def খালী(self):
        return len(self.ধাৰক) == 0
\`\`\`

---

## ৮.৪ লিংকড লিষ্ট (Linked List)

\`\`\`python
class নোড:
    def __init__(self, মান):
        self.মান = মান
        self.পৰৱৰ্তী = None

class লিংকড_লিষ্ট:
    def __init__(self):
        self.মুৰব্বী = None
        self.আকাৰ = 0
        
    def যোগ_কৰা(self, মান):
        নতুন = নোড(মান)
        নতুন.পৰৱৰ্তী = self.মুৰব্বী
        self.মুৰব্বী = নতুন
        self.আকাৰ += 1
        
    def দেখুওৱা(self):
        বৰ্তমান = self.মুৰব্বী
        মানসমূহ = []
        while বৰ্তমান:
            মানসমূহ.append(str(বৰ্তমান.মান))
            বৰ্তমান = বৰ্তমান.পৰৱৰ্তী
        print(" -> ".join(মানসমূহ) + " -> None")

ll = লিংকড_লিষ্ট()
ll.যোগ_কৰা(30)
ll.যোগ_কৰা(20)
ll.যোগ_কৰা(10)
ll.দেখুওৱা()  # 10 -> 20 -> 30 -> None
\`\`\``,
    },
    {
      id: 'ch-9',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ৯: নন-লিনিয়াৰ ডেটা ষ্ট্ৰাকচাৰ (BST & Graphs)',
      subtitle: 'Binary Search Tree, In-order Traversal, BFS & DFS Graph Algorithms',
      estimatedReadTime: '10 min',
      topics: ['Binary Search Tree', 'Tree Traversal', 'Graph BFS', 'Graph DFS'],
      content: `## ৯.১ বাইনাৰী চাৰ্চ ট্ৰি (BST)

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
        if not self.মূল:
            self.মূল = ট্ৰি_নোড(মান)
        else:
            self._যোগ_সহায়(self.মূল, মান)
            
    def _যোগ_সহায়(self, নোড, মান):
        if মান < নোড.মান:
            if নোড.বাওঁ is None:
                নোড.বাওঁ = ট্ৰি_নোড(মান)
            else:
                self._যোগ_সহায়(নোড.বাওঁ, মান)
        else:
            if নোড.সোঁ is None:
                নোড.সোঁ = ট্ৰি_নোড(মান)
            else:
                self._যোগ_সহায়(নোড.সোঁ, মান)
                
    def ইনঅৰ্ডাৰ(self, নোড=None, ফল=None):
        if ফল is None:
            ফল = []
            নোড = self.মূল
        if নোড:
            self.ইনঅৰ্ডাৰ(নোড.বাওঁ, ফল)
            ফল.append(নোড.মান)
            self.ইনঅৰ্ডাৰ(নোড.সোঁ, ফল)
        return ফল

bst = BST()
for x in [50, 30, 70, 20, 40, 60, 80]:
    bst.যোগ(x)
print("ইনঅৰ্ডাৰ (ক্ৰমান্বয়):", bst.ইনঅৰ্ডাৰ())  # [20, 30, 40, 50, 60, 70, 80]
\`\`\`

---

## ৯.২ গ্ৰাফ আৰু BFS / DFS

\`\`\`python
from collections import deque

def গ্ৰাফ_BFS(গ্ৰাফ, আৰম্ভণি):
    ভ্ৰমণ = set([আৰম্ভণি])
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

def গ্ৰাফ_DFS(গ্ৰাফ, আৰম্ভণি, ভ্ৰমণ=None):
    if ভ্ৰমণ is None:
        ভ্ৰমণ = set()
    ভ্ৰমণ.add(আৰম্ভণি)
    ক্ৰম = [আৰম্ভণি]
    for চুবুৰীয়া in গ্ৰাফ.get(আৰম্ভণি, []):
        if চুবুৰীয়া not in ভ্ৰমণ:
            ক্ৰম.extend(গ্ৰাফ_DFS(গ্ৰাফ, চুবুৰীয়া, ভ্ৰমণ))
    return ক্ৰম

গ্ৰাফ = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

print("BFS ক্ৰম:", গ্ৰাফ_BFS(গ্ৰাফ, 'A'))  # ['A', 'B', 'C', 'D', 'E', 'F']
print("DFS ক্ৰম:", গ্ৰাফ_DFS(গ্ৰাফ, 'A'))  # ['A', 'B', 'D', 'E', 'F', 'C']
\`\`\``,
    },
    {
      id: 'ch-10',
      volume: 'খণ্ড ৩: ডেটা ষ্ট্ৰাকচাৰ আৰু এলগৰিদম (DSA Mastery)',
      title: 'অধ্যায় ১০: টাইম-স্পেচ কমপেক্সিটি আৰু ছৰ্টিং এলগৰিদম',
      subtitle: 'Big-O Notation, Merge Sort (O(n log n)) আৰু Quick Sort',
      estimatedReadTime: '9 min',
      topics: ['Big-O Cheat Sheet', 'Merge Sort', 'Quick Sort', 'Binary Search'],
      content: `## ১০.১ Big-O নোটেশন

| নোটেশন | নাম | বাস্তৱ উদাহৰণ |
| :--- | :--- | :--- |
| **O(1)** | কনষ্টেণ্ট | এৰেত ইনডেক্সিং, Hash Map Lookup |
| **O(log n)** | লগাৰিদমিক | বাইনাৰী চাৰ্চ |
| **O(n)** | লিনিয়াৰ | লিনিয়াৰ চাৰ্চ, সাধাৰণ ফৰ-লুপ |
| **O(n log n)** | লিন-লগ | মাৰ্জ ছৰ্ট, হিপ ছৰ্ট |
| **O(n²)** | কোৱাড্ৰেটিক | বাবল ছৰ্ট, নেষ্টেড লুপ |
| **O(2ⁿ)** | এক্সপোনেন্সিয়েল | ৰিকাৰচিভ ফিবোনাচি |
| **O(n!)** | ফেক্টৰিয়েল | ট্ৰাভেলিং চেলছমেন সমস্যা |

---

## ১০.২ মাৰ্জ ছৰ্ট (Merge Sort - O(n log n))

\`\`\`python
def মাৰ্জ_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা
    মধ্য = len(তালিকা) // 2
    বাওঁ = মাৰ্জ_ছৰ্ট(তালিকা[:মধ্য])
    সোঁ = মাৰ্জ_ছৰ্ট(তালিকা[মধ্য:])
    return মাৰ্জ(বাওঁ, সোঁ)

def মাৰ্জ(বা, সো):
    ফল = []
    i = j = 0
    while i < len(বা) and j < len(সো):
        if বা[i] <= সো[j]:
            ফল.append(বা[i])
            i += 1
        else:
            ফল.append(সো[j])
            j += 1
    ফল.extend(বা[i:])
    ফল.extend(সো[j:])
    return ফল

print("মাৰ্জ ছৰ্ট:", মাৰ্জ_ছৰ্ট([38, 27, 43, 3, 9, 82, 10, 55, 19]))
\`\`\`

---

## ১০.৩ কুইক ছৰ্ট (Quick Sort)

\`\`\`python
import random

def কুইক_ছৰ্ট(তালিকা):
    if len(তালিকা) <= 1:
        return তালিকা
    পিভট = random.choice(তালিকা)
    কম = [x for x in তালিকা if x < পিভট]
    সমান = [x for x in তালিকা if x == পিভট]
    বেছি = [x for x in তালিকা if x > পিভট]
    return কুইক_ছৰ্ট(কম) + সমান + কুইক_ছৰ্ট(বেছি)

print("কুইক ছৰ্ট:", কুইক_ছৰ্ট([64, 34, 25, 12, 22, 11, 90]))
\`\`\``,
    },
    {
      id: 'ch-11',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১১: OOP-ৰ স্তম্ভ আৰু ডেটা মডেলিং',
      subtitle: 'Abstract Base Classes, Encapsulation, Properties & Banking Architecture',
      estimatedReadTime: '9 min',
      topics: ['Encapsulation & Private Members', 'ABC & Abstract Methods', 'Inheritance', 'Polymorphism'],
      content: `## ১১.১ এবষ্ট্ৰাক্ট ক্লাছ আৰু ইনহেৰিটেঞ্চ

\`\`\`python
from abc import ABC, abstractmethod
from datetime import datetime

class একাউণ্ট(ABC):
    """বেংক একাউণ্টৰ এবষ্ট্ৰাক্ট বেচ ক্লাছ"""
    def __init__(self, নাম: str, ধন: float, একাউণ্ট_নম্বৰ: str):
        self.নাম = নাম
        self._বেলেঞ্চ = ধন                # প্ৰটেক্টেড
        self.__একাউণ্ট_নম্বৰ = একাউণ্ট_নম্বৰ  # প্ৰাইভেট
        self._ট্ৰাঞ্জেকচন = []
        
    @property
    def বেলেঞ্চ(self) -> float:
        return self._বেলেঞ্চ
        
    @বেলেঞ্চ.setter
    def বেলেঞ্চ(self, মান: float):
        if মান < 0:
            raise ValueError("বেলেঞ্চ ঋণাত্মক হ'ব নোৱাৰে!")
        self._বেলেঞ্চ = মান
        
    def জমা(self, পৰিমাণ: float):
        if পৰিমাণ <= 0:
            raise ValueError("জমাৰ পৰিমাণ ধনাত্মক হ'ব লাগে!")
        self._বেলেঞ্চ += পৰিমাণ
        self._ট্ৰাঞ্জেকচন.append((datetime.now(), "জমা", পৰিমাণ))
        
    def উলিওৱা(self, পৰিমাণ: float):
        if পৰিমাণ > self._বেলেঞ্চ:
            raise ValueError("অপৰ্যাপ্ত বেলেঞ্চ!")
        self._বেলেঞ্চ -= পৰিমাণ
        self._ট্ৰাঞ্জেকচন.append((datetime.now(), "উলিওৱা", -পৰিমাণ))
        
    @abstractmethod
    def সুত_গণনা(self) -> float:
        """প্ৰতিটো একাউণ্টৰ নিজা সুতৰ হাৰ"""
        pass

class সঞ্চয়(একাউণ্ট):
    def __init__(self, নাম, ধন, একাউণ্ট_নম্বৰ):
        super().__init__(নাম, ধন, একাউণ্ট_নম্বৰ)
        self.সুত_হাৰ = 0.05
        
    def সুত_গণনা(self) -> float:
        return self._বেলেঞ্চ * self.সুত_হাৰ

# ব্যৱহাৰ
acc = সঞ্চয়("ৰিকু", 50000.0, "SB-001")
acc.জমা(15000)
print(f"গ্ৰাহক: {acc.নাম}, বৰ্তমান বেলেঞ্চ: ₹{acc.বেলেঞ্চ:,.2f}")
print(f"বাৰ্ষিক সুত: ₹{acc.সুত_গণনা():,.2f}")
\`\`\``,
    },
    {
      id: 'ch-12',
      volume: 'খণ্ড ৪: অবজেক্ট অৰিয়েণ্টেড ডিজাইন, SOLID আৰু আৰ্কিটেকচাৰ',
      title: 'অধ্যায় ১২: SOLID নীতি আৰু ডিজাইন পেটাৰ্ণ',
      subtitle: 'Single Responsibility, Open-Closed, Liskov, Strategy & Factory Pattern',
      estimatedReadTime: '10 min',
      topics: ['SOLID Principles', 'Strategy Pattern (Payments)', 'Factory Pattern (Databases)'],
      content: `## ১২.১ SOLID নীতিসমূহ

- **S (Single Responsibility Principle):** প্ৰতিটো ক্লাছৰ এটাই মাত্ৰ দায়িত্ব থাকিব লাগে।
- **O (Open/Closed Principle):** এক্সটেন্ডৰ বাবে খোলা, কিন্তু মূল কোড সলনিৰ বাবে বন্ধ।
- **L (Liskov Substitution Principle):** চাইল্ড ক্লাছে পেৰেণ্ট ক্লাছৰ ঠাই সম্পূৰ্ণভাৱে ল'ব পাৰিব লাগে।
- **I (Interface Segregation Principle):** ডাঙৰ ইণ্টাৰফেচক সৰু সৰু নিৰ্দিষ্ট ভাগত ভগাব লাগে।
- **D (Dependency Inversion Principle):** এবষ্ট্ৰাকচনৰ ওপৰত নিৰ্ভৰ কৰিব লাগে, কংক্ৰিট ক্লাছৰ ওপৰত নহয়।

---

## ১২.২ ষ্ট্ৰেটেজি পেটাৰ্ণ (Strategy Pattern - Payment Processing)

\`\`\`python
from abc import ABC, abstractmethod
from typing import List

class পেমেণ্ট_পদ্ধতি(ABC):
    @abstractmethod
    def পে(self, পৰিমাণ: float):
        pass
    @abstractmethod
    def পৰিশোধ_যোগ্য(self) -> bool:
        pass

class UPI(পেমেণ্ট_পদ্ধতি):
    def __init__(self, upi_id: str):
        self.upi_id = upi_id
    def পে(self, পৰিমাণ: float):
        print(f"UPI ({self.upi_id}) যোগে ₹{পৰিমাণ:.2f} পৰিশোধ হ'ল।")
    def পৰিশোধ_যোগ্য(self) -> bool:
        return "@" in self.upi_id

class কাৰ্ট:
    def __init__(self):
        self.সামগ্ৰী: List[dict] = []
        self.পদ্ধতি: পেমেণ্ট_পদ্ধতি = None
    def যোগ(self, নাম: str, দাম: float):
        self.সামগ্ৰী.append({"নাম": নাম, "দাম": দাম})
    def মুঠ_দাম(self) -> float:
        return sum(x["দাম"] for x in self.সামগ্ৰী)
    def পেমেণ্ট_ছেট(self, পদ্ধতি: পেমেণ্ট_পদ্ধতি):
        if not পদ্ধতি.পৰিশোধ_যোগ্য():
            raise ValueError("অবৈধ পেমেণ্ট পদ্ধতি!")
        self.পদ্ধতি = পদ্ধতি
    def চেকআউট(self):
        if not self.পদ্ধতি:
            raise ValueError("পেমেণ্ট পদ্ধতি ছেট কৰা নাই!")
        self.পদ্ধতি.পে(self.মুঠ_দাম())
        print("অৰ্ডাৰ সফল!")

# ব্যৱহাৰ
ক = কাৰ্ট()
ক.যোগ("লেপটপ", 75000)
ক.যোগ("মাউচ", 899)
ক.পেমেণ্ট_ছেট(UPI("riku@upi"))
ক.চেকআউট()
\`\`\`

---

## ১২.৩ ফেক্টৰি পেটাৰ্ণ (Factory Pattern)

\`\`\`python
class ডাটাবেছ_ফেক্টৰি:
    @staticmethod
    def তৈয়াৰ(টাইপ: str):
        if টাইপ == "sql":
            return "PostgreSQL Engine Initialized"
        elif টাইপ == "nosql":
            return "MongoDB Cluster Connected"
        raise ValueError(f"অজ্ঞাত ডাটাবেছ টাইপ: {টাইপ}")
\`\`\``,
    },
    {
      id: 'ch-14',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৪: কনকাৰেঞ্চি (AsyncIO & Non-blocking I/O)',
      subtitle: 'Async/Await, asyncio.gather, aiohttp & Concurrent HTTP Requests',
      estimatedReadTime: '9 min',
      topics: ['Event Loop & Coroutines', 'asyncio.gather', 'Async HTTP Client with aiohttp', 'Throughput Benchmarking'],
      content: `## ১৪.১ AsyncIO-ৰ মৌলিক ধাৰণা

\`\`\`python
import asyncio
import time

async def ফেচ_ডেটা(আইডি: int, পলম: float):
    """নকল API কল"""
    print(f"অনুৰোধ {আইডি} আৰম্ভ...")
    await asyncio.sleep(পলম)  # নন-ব্লকিং I/O
    print(f"অনুৰোধ {আইডি} সম্পূৰ্ণ!")
    return {"id": আইডি, "status": 200, "data": f"ফলাফল-{আইডি}"}

async def মুখ্য():
    আৰম্ভ = time.time()
    # সমান্তৰালভাৱে একাধিক অনুৰোধ এক্সিকিউট কৰা
    ফলাফল = await asyncio.gather(
        ফেচ_ডেটা(1, 1.0),
        ফেচ_ডেটা(2, 0.5),
        ফেচ_ডেটা(3, 1.5),
        ফেচ_ডেটা(4, 0.2)
    )
    print(f"\\nমুঠ সময়: {time.time() - আৰম্ভ:.2f}s")
    print("ফলাফলসমূহ:", ফলাফল)

# asyncio.run(মুখ্য())
\`\`\`

---

## ১৪.২ Async HTTP Client (aiohttp)

\`\`\`python
import aiohttp
import asyncio

async def বাস্তৱ_API_কল():
    async with aiohttp.ClientSession() as session:
        urls = [
            "https://api.github.com/users/python",
            "https://api.github.com/users/google",
            "https://api.github.com/users/microsoft"
        ]
        tasks = [session.get(url) for url in urls]
        responses = await asyncio.gather(*tasks)
        for resp in responses:
            data = await resp.json()
            print(f"{data.get('login')}: {data.get('public_repos')} public repos")

# asyncio.run(বাস্তৱ_API_কল())
\`\`\``,
    },
    {
      id: 'ch-16',
      volume: 'খণ্ড ৫: এডভান্সড পাইথন, চিষ্টেম আৰু কনকাৰেঞ্চি',
      title: 'অধ্যায় ১৬: লগিResource, এক্সেপচন আৰ্কিটেকচাৰ আৰু মনিটৰিং',
      subtitle: 'Production Logging, Rotating File Handler, Custom Exception Hierarchy',
      estimatedReadTime: '8 min',
      topics: ['RotatingFileHandler', 'Structured Logging', 'Custom Exception Hierarchy', 'Try-Except-Else-Finally'],
      content: `## ১৬.১ প্ৰফেচনেল লগিঙৰ ব্যৱস্থা

\`\`\`python
import logging
import sys
from logging.handlers import RotatingFileHandler

# লগাৰ কনফিগাৰেচন
logger = logging.getLogger("CodeYatra")
logger.setLevel(logging.DEBUG)

# কন্স'ল হেণ্ডলাৰ
console = logging.StreamHandler(sys.stdout)
console.setLevel(logging.INFO)
console_fmt = logging.Formatter("%(asctime)s [%(levelname)s] %(name)s - %(message)s")
console.setFormatter(console_fmt)

# ফাইল হেণ্ডলাৰ (ৰোটেটিং ১MB ফাইল, ৫টা বেকআপ)
file_handler = RotatingFileHandler("app.log", maxBytes=1024*1024, backupCount=5)
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(console_fmt)

logger.addHandler(console)
logger.addHandler(file_handler)

logger.info("চিষ্টেম সুচাৰুৰূপে আৰম্ভ হ'ল।")
logger.warning("মেম'ৰি ৮০% ব্যৱহৃত!")
\`\`\`

---

## ১৬.২ কাষ্টম এক্সেপচন হায়াৰাৰ্কি

\`\`\`python
class CodeYatraError(Exception):
    """বেচ এক্সেপচন"""
    pass

class ভেলিডেশনError(CodeYatraError):
    def __init__(self, ক্ষেত্ৰ: str, বাৰ্তা: str):
        self.ক্ষেত্ৰ = ক্ষেত্ৰ
        self.বাৰ্তা = বাৰ্তা
        super().__init__(f"[{ক্ষেত্ৰ}] {বাৰ্তা}")

def ব্যৱহাৰকাৰী_সৃষ্টি(তথ্য: dict):
    if "ইমেইল" not in তথ্য:
        raise ভেলিডেশনError("ইমেইল", "ইমেইল বাধ্যতামূলক!")
    if তথ্য.get("বয়স", 0) < 18:
        raise ভেলিডেশনError("বয়স", "বয়স ১৮ বছৰৰ কম হ'ব নোৱাৰে!")
    return {"status": "created"}

try:
    ব্যৱহাৰকাৰী_সৃষ্টি({"নাম": "ৰিকু", "বয়স": 16})
except ভেলিডেশনError as e:
    print(f"ভেলিডেশন ত্ৰুটি: {e}")
\`\`\``,
    },
    {
      id: 'ch-17',
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
      id: 'ch-19',
      volume: 'খণ্ড ৬: ডাটাবেছ আৰ্কিটেকচাৰ আৰু আধুনিক বেকএণ্ড ইঞ্জিনিয়াৰিং',
      title: 'অধ্যায় ১৯: প্ৰডাকচন-ৰেডি RESTful API (FastAPI & Pydantic V2)',
      subtitle: 'Lifespan Events, Pydantic V2 Models, Dependency Injection & JWT Security',
      estimatedReadTime: '11 min',
      topics: ['FastAPI 2026 Lifespan', 'Pydantic V2 Validation', 'Dependency Injection (Depends)', 'JWT Authentication'],
      content: `## ১৯.১ FastAPI এপ্লিকেচন (২০২৬ সংস্কৰণ)

\`\`\`python
from fastapi import FastAPI, HTTPException, status, Depends, BackgroundTasks
from pydantic import BaseModel, EmailStr, Field, ConfigDict, field_validator
from typing import List, Optional, Annotated
from datetime import datetime
import uuid
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("চাৰ্ভাৰ আৰম্ভ হ'ল!")
    yield
    print("চাৰ্ভাৰ বন্ধ হ'ল!")

app = FastAPI(
    title="অসমীয়া API ২০২৬",
    description="প্ৰডাকচন-ৰেডি এণ্টাৰপ্ৰাইজ ব্যৱহাৰকাৰী ব্যৱস্থাপনা API",
    version="2.0.0",
    lifespan=lifespan
)

db = {}

# Pydantic V2 মডেল
class UserBase(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    full_name: Optional[str] = None
    age: Optional[int] = Field(None, ge=0, le=150)

class UserIn(UserBase):
    password: str = Field(..., min_length=8)

class UserOut(UserBase):
    id: str
    created_at: datetime
    is_active: bool = True

@app.post("/users", response_model=UserOut, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserIn):
    if any(u["email"] == user.email for u in db.values()):
        raise HTTPException(status_code=400, detail="এই ইমেইলৰে ইতিমধ্যে পঞ্জীয়ন আছে!")
    
    user_id = str(uuid.uuid4())
    user_data = user.model_dump()
    user_data["id"] = user_id
    user_data["created_at"] = datetime.now()
    user_data["is_active"] = True
    db[user_id] = user_data
    return user_data

@app.get("/users", response_model=List[UserOut])
async def list_users():
    return list(db.values())
\`\`\`

---

## ১৯.২ API চিকিউৰিটি (JWT & OAuth2)

\`\`\`python
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext

SECRET_KEY = "আপোনাৰ-অতি-গোপন-ছিক্ৰেট-কি"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def টোকেন_সৃষ্টি(ডাটা: dict):
    return jwt.encode(ডাটা, SECRET_KEY, algorithm=ALGORITHM)
\`\`\``,
    },
    {
      id: 'ch-20',
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
      id: 'ch-21',
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
      id: 'ch-22',
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
      id: 'ch-23',
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
      id: 'ch-24',
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
      id: 'ch-25',
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
        content: `## 1.1 The Evolution of Foundation Models

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
        content: `## 2.1 Why Naive RAG Fails in Enterprise

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
